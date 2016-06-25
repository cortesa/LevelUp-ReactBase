import {composeWithTracker} from 'react-komposer';
import MainNav from '../partials/MainNav.jsx';

function composer(props, onData) {
		const user = Meteor.user();
		const isAdmin = Roles.userIsInRole(user, ['admin']);
		onData(null, {user, isAdmin});
};

export default composeWithTracker(composer)(MainNav);