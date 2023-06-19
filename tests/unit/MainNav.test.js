import { render, screen } from '@testing-library/vue';

import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
	it('displays company name', () => {
		render(MainNav);
		const companyName = screen.getByText('Doodle Careers');
		expect(companyName).toBeInTheDocument();
	});

	it('displays menu items for navigation', () => {
		render(MainNav);
		const navigationMenuItems = screen.getAllByRole('listitem');

		console.log(navigationMenuItems);
		const navigationMenuTexts = navigationMenuItems.map(item => item.textContent);
		expect(navigationMenuItems).toEqual([
			'Teams',
			'Locations',
			'Life at Doodle Corp',
			'How we hire',
			'Students',
			'Jobs',]);
	});
});
