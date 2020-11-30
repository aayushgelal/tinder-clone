import { Avatar } from '@material-ui/core'
import React, { useState,useEffect} from 'react';
import './ChatScreen.css';
import {useLocation} from 'react-router-dom';
function ChatScreen(props) {
  const locatio=useLocation().pathname;
  const location=decodeURI(locatio).substring(6);
  const person = props.people.filter(person => person.name===location);
  function fnc(){

    if (person[0]){
      setmessages([{name:person[0].name,profile:person[0].profile,message:person[0].messages},{message:"hello"}]);
    }
  }
  const [messages, setmessages] = useState([]);
  useEffect(() =>fnc(),[]);
    const [input,setInput]=useState('');
    const handleClick = e => {
        e.preventDefault();
        setmessages([...messages,{message:input}]);
        setInput('');
      }
    return (
        <div key={messages}>
            <p className="chatscreen_timestamp">You matched yesterday</p>
            {messages.map(message => message.name?(<div className="chatscreen_message">
                <Avatar src={message.profile} alt={message.name} className="chatscreen_avatar" />
                <p>{message.message}</p>
    </div>):(<div className="chatscreen_message"><p className="Self" style={{backgroundColor:"#29b3cd"}}>{message.message}</p></div>))}
    <form className="form" onSubmit={handleClick}>
        <input placeholder="Type a message" className="input" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className="button" >Send</button>
    </form>
        </div>
    )
}

export default ChatScreen
