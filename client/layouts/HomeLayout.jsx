import React from 'react';
import Header from '../partials/Header.jsx';

export const HomeLayout = ({content}) => (
	<div className="main-layout">
		<Header />
		<main className="main-layout">
			{content}
		</main>
	</div>
)
