// diaplay message, child to MessageList 

import React, {Component} from 'react';
import uuidv4 from 'uuid/v4';

class Message extends Component {
    render() {
        let colorStyle = {
            'color': this.props.message.color
        }
        let imgStyle = {
            'width': '60%'
        }
        if (this.props.message.type == 'incomingMessage') {
            // todo: check if content has image url
            // if does, display
            let imageList = null;
            let images = [...new Set(this.props.message.content.match(/(https?:\/\/.*\.(?:png|jpg|gif))/i))];
            let content = this.props.message.content;
            if (images.length > 0) {
                imageList = images.map((image) => {
                    content = content.replace(image, '');
                    return (
                        <div key={uuidv4()} className="message">
                            <span className="message-username"></span>
                            <span className="message-content"><img style={imgStyle} src={image}/></span>
                        </div>
                    );
                });
            }

            return (
                <div>
                    <div className="message">
                        <span style={colorStyle} className="message-username">{this.props.message.username}</span>
                        <span className="message-content">{content}</span>
                    </div>
                    {imageList}
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