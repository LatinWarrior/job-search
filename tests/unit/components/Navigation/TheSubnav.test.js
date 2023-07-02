import { render, screen } from '@testing-library/vue';

import TheSubnav from '@/components/Navigation/TheSubnav.vue';

describe('TheSubnav', () => {

  const renderTheSubnav = (routeName) => {
    render(TheSubnav, {
      global: {
        mocks: {
          $route: {
            name: routeName
          }
        },
        stubs: {
          FontAwesomeIcon: true,
        }
      },
    });
  };

  describe('Whe user is on jobs page', () => {
    it('displays job count', () => {

      const routeName = 'JobResults';

      renderTheSubnav(routeName);

      // const $routeMock = {
      //   name: 'JobResults'
      // };

      // render(TheSubnav, {
      //   global: {
      //     mocks: {
      //       $route: $routeMock
      //     },
      //     stubs: {
      //       FontAwesomeIcon: true,
      //     }
      //   },
      // });

      const jobCount = screen.getByText('1653');

      expect(jobCount).toBeInTheDocument();
    });
  });
  describe('Whe user is not on jobs page', () => {
    it('does NOT display the job count', () => {

      const routeName = 'Home';

      renderTheSubnav(routeName);

      // const $routeMock = {
      //   name: 'Home'
      // };

      // render(TheSubnav, {
      //   global: {
      //     mocks: {
      //       $route: $routeMock
      //     },
      //     stubs: {
      //       FontAwesomeIcon: true,
      //     }
      //   },
      // });

      const jobCount = screen.queryByText('1653');

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});