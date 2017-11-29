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

  render() {
    return (
      <div>
        <Nav />
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser}/>
      </div>
    );
  }
}
export default App;
