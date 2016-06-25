import React, {Component} from 'react';

export default class AppNav extends Component {
	render() {
		return (
			<div className="app-nav">
	        <ul>
	            <li><a href="/admin/dashboard"><i className="fa fa-dashboard"></i> <span>Dashboard</span></a></li>
	            <li><a href="/admin/users"><i className="fa fa-users"></i> <span>Users Management</span></a></li>
	        </ul>
    </div>
		)
	}
}