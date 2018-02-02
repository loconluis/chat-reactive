import React from 'react';
// components
import Messages from './Messages';

export default ({ messages }) => {
  return (
    <section id="messages-list">
      <ul>
      {
        messages.map(message => (
          <Messages
            key={message.id}
            {...message}
          />
        ))
      }
      </ul>
    </section>    
  );
};

