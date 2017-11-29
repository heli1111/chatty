import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import Nav from './Nav.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
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
      ]
    }    
  }

  // runs when components mount
  componentDidMount() {
    console.log("componentDidMount <App />");

    // run 3 seconds after component is mounted
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

  addMessage = (message) => {
    console.log('addMessage - ' + JSON.stringify(message));
    const messages = this.state.messages.concat(message);
    this.setState({messages: messages});
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
