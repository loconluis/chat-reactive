import React, { Component } from 'react';
// components
import { SideBar } from './containers/Sidebar';
import { MessagesList } from './containers/MessagesList';
import { AddMessage } from './containers/AddMessage';
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
