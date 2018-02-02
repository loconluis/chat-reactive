import React from 'react';
import { connect } from 'react-redux';
// components
import Messages from './Messages';

const MessagesList = ({ messages }) => {
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

const mapStateToprops = state => ({
  messages: state.messages
})

export default connect(mapStateToprops)(MessagesList)