import React from 'react';

export default ({ message, author }) => {
  return (
    <p>
      <i>{author}</i>: {message}
    </p>
  );
};

// <section id="messages-list">Messages List</section>