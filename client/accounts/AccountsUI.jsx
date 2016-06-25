import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from 'simple-react-modal';

import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';



export default class AccountsLogin extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      showForm: "login"
    }
  }

  Modal(action) {
    switch(action) {
      case "open":
          this.setState({show: true});
          break;
      case "close":
          this.setState({show: false});
          break;
      case "toggle":
        this.setState({show: !this.state.show});
        break;
    }
  }

logout(e){
  e.preventDefault();
  //console.log("logout");
  Meteor.logout();
  this.Modal("close");
}

toggleMenuItem() {
  let icon, menuItem, action;
  if (Meteor.user()){
      icon = <i className="fa fa-user"> Logout </i>;
      menuItem = Meteor.user().profile.firstName;
      action = this.logout.bind(this);     
  } else {
      icon =' ';
      menuItem = "Login/Sign-Up";
      action = this.Modal.bind(this,"open");
  }
  return(
    <span onClick={action}>{icon} {menuItem}</span>
  );
}

toggleForm() {
  if(this.state.showForm === "login") {
    this.setState({showForm: "register"});
  } else {
    this.setState({showForm: "login"});    
  }
}

  render() {
    const menuItem = this.toggleMenuItem();
    const showForm = this.state.showForm;
    return (
      <li>
      <li className="mainNav-Item">{menuItem}</li>
        <div>
          <ReactCSSTransitionGroup
            transitionName="modalLoad"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={200}>
            <Modal
            className="login-modal"
            key={this.state.show}
            show={this.state.show}
            onClose={this.Modal.bind(this, "toggle")}>
              <i className="fa fa-close close-login" onClick={this.Modal.bind(this,"close")} ></i>
              {showForm === 'login' ? (
                  <div>
                    <LoginForm closeModal={this.Modal.bind(this,"close")} />
                    <p>Do not have an account? <button className="btn-small" onClick={this.toggleForm.bind(this)} >Register</button></p>
                  </div>
                ) : showForm === 'register' ? (
                  <div>
                    <RegisterForm closeModal={this.Modal.bind(this,"close")} />
                    <button className="btn-small" onClick={this.toggleForm.bind(this)} >Login</button>
                  </div>
                ) : null}             
            </Modal>
            </ReactCSSTransitionGroup>
        </div>
      </li>  
    );
  }
}