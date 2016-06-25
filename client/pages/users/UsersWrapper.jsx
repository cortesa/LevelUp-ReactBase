import React from 'react';

import UserSingle from './UserSingle.jsx';
import UserEdit from './UserEdit.jsx';

export default class UserInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      edit_mode: '',
      editUser: null
    }
  }

  editModeOn(User){
    if (Meteor.user()._id !== User._id){
      if (this.state.edit_mode ===''){
        this.setState({edit_mode: 'edit-mode',
                        editUser: User});
      }
    } else {
      Bert.alert('You can not edit yourself', 'danger', 'fixed-top');
    }
  }

  editModeOff(){
    if(this.state.edit_mode !==''){
      this.setState({edit_mode: ''});
    }
  }

  render() {
    const {currentUser, isAdmin, allUsers} = this.props;
    return (
      <div id="userinfo">
        <h1 className="page-title">Users</h1>
        <UserEdit show={this.state.edit_mode} editUser={this.state.editUser} toggleEditSatus={this.editModeOff.bind(this)} />
        <table className={this.state.edit_mode}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Created At</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
        {allUsers.map((User)=> {
          return (
            <UserSingle key={User._id} User={User} toggleEditSatus={this.editModeOn.bind(this)} />
          )
          })}
        </tbody>
        </table>
      </div>
    )
  }
}