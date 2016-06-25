import React, {Component} from 'react';
import moment from 'moment';

export default class UserSingle extends Component {

	constructor(){
		super();
		this.state = {
			visibleClass: 'user-edit',
		}
	}

	editUser(User){
		this.setState({visibleClass: 'user-edit user-edit-visible '});
		this.props.toggleEditSatus(User);
	}

	toggle_Admin(userId){
		console.log("toggle_Admin: " + userId);
		Meteor.call('toggleAdmin', userId);
	}

	render() {
		const User = this.props.User;
		const userId = User._id
		const isAdmin = Roles.userIsInRole(User, ['admin'])? 'Admin':'';
		return(
			<tr>
				<td><a className="user_id" onClick={this.editUser.bind(this, User)}>{User._id} </a></td>
				<td>{User.emails[0].address}</td>
				<td>{User.profile.firstName}</td>
				<td>{moment(User.createdAt).format('MMMM D YYYY hh:mm')}</td>
				<td>{isAdmin}</td>
			</tr>
		)
	}
}