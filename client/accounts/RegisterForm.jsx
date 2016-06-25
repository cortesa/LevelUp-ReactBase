import React, {Component} from 'react';

export default class RegisterForm extends Component {

	closeModal(){
		this.props.closeModal();
	}

	RegisterHandle(event){
		event.preventDefault();
		let RegisterEmail = this.refs.RegisterEmail.value.trim();
		let RegisterPassword = this.refs.RegisterPassword.value.trim();
		let RegisterFirstName = this.refs.RegisterFirstName.value.trim();
		let RegisterProfession = this.refs.RegisterProfession.value.trim();
		console.log(RegisterEmail);
		console.log(RegisterPassword);
		console.log(RegisterFirstName);
		console.log(RegisterProfession);
		Accounts.createUser({
				email: RegisterEmail,
				password: RegisterPassword,
				profile: {	firstName: RegisterFirstName,
							profession: RegisterProfession}
			}, function(error,result){if(error){console.log(error.reason)}});
//		const User = Meteor.users.findOne();
//		Roles.addUsersToRoles(User, defaultUser.roles);
		this.closeModal();
	}

	render() {
		return(
			<div>
				<h3>Create an Account</h3>
	              <form calssName="loginForm" onSubmit={this.RegisterHandle.bind(this)}>
	                <p>Email <input type="email" ref="RegisterEmail" placeholder="email"/></p>
	                <p>Password <input type="password" ref="RegisterPassword" placeholder="password" /></p>
	                <p>First Name <input type="text" ref="RegisterFirstName" placeholder="First Name" /></p>
	                <p>Profession 	<select ref="RegisterProfession" >
										<option value="developer">Developer</option>
										<option value="designer">Designer</option>
										<option value="other">Other</option>
									</select> </p>
	                <button type="button" className="btn btn-primary btn-block" onClick={this.RegisterHandle.bind(this)} >Register </button>
	                <p>By clicking REGISTER, you agree to our <a>Privacy Policy</a> and <a></a> </p>
	              </form>
	        </div>
		);
	}
}