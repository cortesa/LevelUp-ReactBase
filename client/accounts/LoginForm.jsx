import React, {Component} from 'react';

export default class LoginForm extends Component {

	closeModal(){
		this.props.closeModal();
	}

	loginHandle(event){
		event.preventDefault();
		let loginEmail= this.refs.loginEmail.value.trim();
		let loginPassword= this.refs.loginPassword.value.trim();
		Meteor.loginWithPassword(loginEmail, loginPassword, function(err){
		if (err) {
				//console.log("Login Error");
				Bert.alert('Login Error: Email or Password are invalid', 'warning', 'fixed-top', 'fa-frown-o');
			} else {
				//console.log("Login Correct");
			};  
		})
		this.closeModal();
	}

	render() {
		return(
			<div>
				<h3>Sign In</h3>
	              <form calssName="loginForm" onSubmit={this.loginHandle.bind(this)}>
	                <p>Email <input type="email" ref="loginEmail" placeholder="email"/></p>
	                <p>Password <input type="password" ref="loginPassword" placeholder="password" /></p>
	                <button type="button" className="btn btn-primary btn-block" onClick={this.loginHandle.bind(this)} >Sign in</button>
	              </form>
	        </div>
		);
	}
}