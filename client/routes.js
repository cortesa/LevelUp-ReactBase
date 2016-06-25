import React from 'react';
import {mount} from 'react-mounter';

import {HomeLayout} from './layouts/HomeLayout.jsx';
import {AppLayout}  from './layouts/AppLayout.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Users from './containers/userInfo.jsx';
import AdminLanding from './pages/AdminLanding.jsx';

//React Prefix Routes
var reactRoutes = FlowRouter.group({
    prefix:'',
    name: 'react'
})

reactRoutes.route('/', {
    name: 'Home',
    action() {
        mount(HomeLayout, {
            content: (<Home />)
        })
    }
})

var reactAdminRoutes = reactRoutes.group({
    prefix: '/admin',
    name: 'admin',
    triggersEnter: (context, redirect) => {
        if (!Roles.userIsInRole(Meteor.user(), ['admin'])) {
            Bert.alert('You are not Admin', 'danger', 'fixed-top', 'fa-frown-o');
            redirect('Home');
        }
    }
})

reactAdminRoutes.route('/', {
    name: 'Admin',
    action(){
        mount(AppLayout, {
            content: (<AdminLanding />)
        })
    }
})



reactAdminRoutes.route('/dashboard', {
    action() {
        mount(AppLayout, {
            content: (<Dashboard />)
        })
    }
})

reactAdminRoutes.route('/users', {
    action() {
        mount(AppLayout, {
            content: (<Users />)
        })
    }
})