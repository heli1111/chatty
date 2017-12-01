// diaplay message, child to MessageList 

import React, {Component} from 'react';

class Message extends Component {
    render() {
        var colorStyle = {
            'color': this.props.message.color
        }
        if (this.props.message.type == 'incomingMessage') {
            return (
                <div className="message">
                    <span style={colorStyle} className="message-username">{this.props.message.username}</span>
                    <span className="message-content">{this.props.message.content}</span>
                </div>
            )
        } else if (this.props.message.type == 'incomingNotification') {
            return (
                <div className="message system">
                    {this.props.message.content}            
                </div>
            )
        }
        return (
            <div>Invalid Message</div>
        );
    }
}

export default Message;