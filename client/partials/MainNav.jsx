import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AccountsUI from '../accounts/AccountsUI.jsx'



export default class MainNav extends Component {
	//console.log(this.props);
    //console.log("from container: " + user);
    //console.log("from container: " + isAdmin);
    //<li className=""><AccountsLogin /></li>
	render() {
		return (
			<nav className="main-nav" ref="container">
		        <ul>
		        	<li className="mainNav-Item"><a href="/blaze">BV</a></li>
		            <li className="mainNav-Item"><a href="/">Home</a></li>
		            <li className="mainNav-Item"><a href="/admin">Admin</a></li>
		            <AccountsUI />
		        </ul>
      		</nav>
		)
	}
}