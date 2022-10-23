import React, { useState } from 'react';
function Chat({ socket, username, room }) {
    const [currentMessage,SetCurrentMessage] = useState("");
    return (
        <div>
            <div className="chat-header">
                <p>Live chat !</p>
            </div>
            <div className="chat-body"></div>

            <div className="chat-footer" >
                <input type="text" placeholder="Your message" />
                <button>Send message</button>
            </div>
        </div>
    );
}

export default Chat
