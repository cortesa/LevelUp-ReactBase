Meteor.methods({
	toggleAdmin(id) {
		console.log(id);
		if(Roles.userIsInRole(id, 'admin')) {
			Roles.removeUsersFromRoles(id, 'admin');
		} else {
			Roles.addUsersToRoles(id, 'admin');
		}
	}
});