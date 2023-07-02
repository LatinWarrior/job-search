import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { RouterLinkStub } from '@vue/test-utils';

import MainNav from '@/components/Navigation/MainNav.vue';

describe('MainNav', () => {
	const renderMainNav = () => {

		const $routeMock = {
			name: 'Home'
		};

		render(MainNav, {
			global: {
				mocks: {
					$route: $routeMock
				},
				stubs: {
					FontAwesomeIcon: true,
					RouterLink: RouterLinkStub
				},
			},
		});
	};

	it('displays company name', () => {
		renderMainNav();
		const companyName = screen.getByText('Doodle Careers');
		expect(companyName).toBeInTheDocument();
	});

	it('displays menu items for navigation', () => {
		renderMainNav();
		const navigationMenuItems = screen.getAllByRole('listitem');

		console.log(navigationMenuItems);
		const navigationMenuTexts = navigationMenuItems.map(item => item.textContent);
		expect(navigationMenuTexts).toEqual([
			'Teams',
			'Locations',
			'Life at Doodle Corp',
			'How we hire',
			'Students',
			'Jobs',]);
	});

	describe('When the user logs in', () => {
		it('displays user profile picture', async () => {
			renderMainNav();
			// screen.getByRole('img')
			let profileImage = screen.queryByRole('img', {
				name: /user profile image/i,
			});
			expect(profileImage).not.toBeInTheDocument();

			const loginButton = screen.getByRole('button', {
				name: /sign in/i,
			});

			await userEvent.click(loginButton);

			// Change queryByRole to getByRole because the image should exist at this point.
			profileImage = screen.getByRole('img', {
				name: /user profile image/i,
			});
			expect(profileImage).toBeInTheDocument();
		});
	});
});
