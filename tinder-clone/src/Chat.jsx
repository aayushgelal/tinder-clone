import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Chat.css";
import {Link} from 'react-router-dom';
function Chat({ time, name, profile, message }) {
    return (
        <Link to={`/chat/${name}`}>
        <div className="chat">
            <Avatar className="chat_image" alt={name} src={profile} />
            <div className="chat_detail">
                <h2>{name}</h2>
                <p>{message}</p>
                </div>

            <p className="time">{time}</p>

        </div>
        </Link>
    )
}

export default Chat
