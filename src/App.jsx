import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import Nav from './Nav.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    
    // create new web socket and store in class member variable socket
    this.socket = new WebSocket("ws://localhost:3001");
    
    this.socket.onmessage = (event) => {
      let message = JSON.parse(event.data);
      const messages = this.state.messages.concat(message);
      this.setState({messages: messages});
    };

    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
      /*
        {
          id: 0,
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
          type: 'normal'
        },
        {
          id: 1,
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.',
          type: 'normal'
        },
        {
          id: 2,
          content: 'Anonymous1 changed their name to nomnom.',
          type: 'system'
        }
        */
    }    
  }

  // runs when components mount
  componentDidMount() {
    console.log("componentDidMount <App />");
  }

  addMessage = (message) => {
    this.socket.send(JSON.stringify(message));
  }

  render() {
    return (
      <div>
        <Nav />
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage}/>
      </div>
    );
  }
}
export default App;
