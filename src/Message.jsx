// diaplay message, child to MessageList 

import React, {Component} from 'react';

class Message extends Component {
    render() {
        if (this.props.message.type == 'system') {
            return (
            <div className="message system">
                {this.props.message.content}            
            </div>
            )
        }
        return (
        <div>
            <div className="message">
                <span className="message-username">{this.props.message.username}</span>
                <span className="message-content">{this.props.message.content}</span>
            </div>
        </div>
        )
    }
}
export default Message;