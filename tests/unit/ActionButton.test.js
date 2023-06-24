import { render, screen } from '@testing-library/vue';

import ActionButton from '@/components/ActionButton.vue';

describe('ActionButton', () => {
  it('renders test', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    });

    const button = screen.getByRole('button', {
      name: /click me/i
    });

    expect(button).toBeInTheDocument();
  });

  it('applies one of several styles to button', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    });

    const button = screen.getByRole('button', {
      name: /click me/i
    });

    expect(button).toHaveClass('primary');

  });
});
