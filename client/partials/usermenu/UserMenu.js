Template.UserMenuModal.events({
	'click .logout': () => {
		AccountsTemplates.logout();
		Session.set('userMenu-toggle', '');
	},
	'click .userMenuItem': () => {
		Session.set('userMenu-toggle', '');
	}
});