import React, { Component } from 'react';
// components
import SideBar from './Sidebar';
import MessagesList from './MessagesList';
import AddMessage from './AddMessage';
// styles
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <SideBar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
