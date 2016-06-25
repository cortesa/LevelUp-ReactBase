Meteor.startup(function () {
		console.log("Comienza defaultUser");
		console.log(Meteor.users.find().count());
		Meteor.call('createDefaultUser');
		console.log(Meteor.users.find().count());
		console.log("Termina defaultUser");

	});


Meteor.methods({

	createDefaultUser() {
		const defaultUser={
			email: "admin@admin.com",
			password: "123456",
			name: "Paco",
			roles:['admin']
		};

		const User1={
			email: "user1@user1.com",
			password: "123456",
			name: "Andy",
			roles:['']
		};

		if (Meteor.users.find().count()<1){
			Accounts.createUser({
				email: defaultUser.email,
				password: defaultUser.password,
				profile: {firstName: defaultUser.name},
			});
			const User = Meteor.users.findOne();
			Roles.addUsersToRoles(User, defaultUser.roles);

			Accounts.createUser({
				email: User1.email,
				password: User1.password,
				profile: {firstName: User1.name},
			});
		}		
	},

	toggleAdmin(id) {
		console.log(id);
		if(Roles.userIsInRole(id, 'admin')) {
			Roles.removeUsersFromRoles(id, 'admin');
		} else {
			Roles.addUsersToRoles(id, 'admin');
		}
	}
});