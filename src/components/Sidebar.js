import React from 'react';
import { connect } from 'react-redux'

const Sidebar = ({ users }) => {
  return (
    <aside id="sidebar">
      <ul>
        {
          users.map(user => 
            (<li
              key={user.id}
            >
              {user.name}
            </li>
          ))
        }
      </ul>
    </aside>
  );
}

const mapStateToProps = state => ({
  users: state.users,
})

export default connect(mapStateToProps)(Sidebar)