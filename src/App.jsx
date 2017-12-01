import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import Nav from './Nav.jsx';
import uuidv4 from 'uuid/v4';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      totalUsers: 0
    }
  }

  // runs when components mount
  componentDidMount() {
    // create new web socket and store in class member variable socket
    this.socket = new WebSocket("ws://localhost:3001");

    this.socket.onopen = (event) => {
      console.log("Connected to server");
    };

    this.socket.onmessage = (event) => {
      let data = JSON.parse(event.data);
      switch(data.type) {
        case 'incomingMessage': 
          this.setState({messages: this.state.messages.concat(data)});
          break;
        case 'incomingNotification':
          this.setState({messages: this.state.messages.concat(data)});
          break;
        case 'incomingUsers':
          this.setState({totalUsers: data.content});
          break;
        default:
          throw new Error("Unknown event type " + data.type);
      }
    };
  }

  changeUsername = (newUsername) => {
    if (this.state.currentUser.name === newUsername) {
        return;
    }
    const notification = {
      id: uuidv4(),
      content: this.state.currentUser.name + " changed their name to " + newUsername,
      type: "postNotification"
    }
    this.socket.send(JSON.stringify(notification));
    this.setState({currentUser: {name: newUsername}});
  }

  addMessage = (message) => {
    this.socket.send(JSON.stringify(message));
  }

  render() {
    return (
      <div>
        <Nav totalUsers={this.state.totalUsers} />
        <MessageList messages={this.state.messages} />
        <ChatBar changeUsername={this.changeUsername} currentUser={this.state.currentUser} addMessage={this.addMessage} />
      </div>
    );
  }
}

export default App;
