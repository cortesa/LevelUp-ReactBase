import React, {Component} from 'react';

export default class UserEdit extends Component {

	toggleEditSatus(){
		this.props.toggleEditSatus();
	}

	toggle_Admin(userId){
		Meteor.call('toggleAdmin', userId);
		this.toggleEditSatus();
	}

	render(){
		const User = this.props.editUser;
		if (!User){
			return(
				<div></div>
			)
		};
		const userId = User._id;
		const userName = User.profile.firstName;
		return(
			<div id="user-edit-form" className={this.props.show}>
				<i className="fa fa-close close-edit-mode" onClick={this.toggleEditSatus.bind(this)} ></i>
				<h3>Edit User</h3>
				<span>{userName}</span>
				<button className="toggle-admin" onClick={this.toggle_Admin.bind(this, userId)} >Toggle Admin</button>
			</div>	
		)
	}
}