import React from 'react'
import Chat from "./Chat";
function Chats(props) {
  const peopl=props.people;
  console.log(peopl);
    return (
        <div key={peopl}>
        {peopl.map((person,index) => <Chat key={index} name={person.name} profile={person.profile} time={Math.floor(Math.random()*10)} message={person.messages}/>)}
        </div>
    )
}

export default Chats;
