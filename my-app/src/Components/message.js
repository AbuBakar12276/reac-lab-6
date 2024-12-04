import React from 'react';
import './message.css';

function Message({message}) {

  return (
    <div className="message">
      <p>Message 1: {message.message1}</p>
      <p>Message 2: {message.message2}</p>
      <p>Message 3: {message.message3}</p>
    </div>
  );
}

export default Message;