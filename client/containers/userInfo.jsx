import {composeWithTracker} from 'react-komposer';
import UsersWrapper from '../pages/users/UsersWrapper.jsx';

function composer(props, onData) {
	if (Meteor.subscribe('allUsers').ready()) {
		const user = Meteor.user();
		const isAdmin = Roles.userIsInRole(user, ['admin']);
		const allUsers = Meteor.users.find().fetch();
		onData(null, {user, isAdmin, allUsers});
	};
};

export default composeWithTracker(composer)(UsersWrapper);