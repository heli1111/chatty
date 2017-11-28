import React, {Component} from 'react';
import Nav from './Nav.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <MessageList />
        <ChatBar />
      </div>
    );
  }
}s
export default App;
