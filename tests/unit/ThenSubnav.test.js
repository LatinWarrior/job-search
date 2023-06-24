import { render, screen } from '@testing-library/vue';

import TheSubnav from '@/components/TheSubnav.vue';

describe('TheSubnav', () => {
  describe('Whe user is on jobs page', () => {
    it('displays job count', () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          }
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });

      const jobCount = screen.getByText('1653');

      expect(jobCount).toBeInTheDocument();
    });
  });
  describe('Whe user is not on jobs page', () => {
    it('does NOT display the job count', () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          }
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });

      const jobCount = screen.queryByText('1653');

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});