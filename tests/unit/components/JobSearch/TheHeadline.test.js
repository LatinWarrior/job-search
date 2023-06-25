import { nextTick } from 'vue';

import { render, screen } from '@testing-library/vue';

import TheHeadline from '@/components/JobSearch/TheHeadline.vue';

describe('TheHeadline', () => {

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('displays introductory action verb', () => {

    // vi.useFakeTimers();

    render(TheHeadline);

    const actionPhrase = screen.getByRole('heading', {
      name: /build for everyone/i,
    });

    expect(actionPhrase).toBeInTheDocument();

    // vi.useRealTimers();
  });

  it('changes action verb at a constant internal', () => {

    // vi.useFakeTimers();

    const mock = vi.fn();

    vi.stubGlobal('setInterval', mock);

    render(TheHeadline);

    expect(mock).toHaveBeenCalled();

    // vi.useRealTimers();
  });

  it('Swaps action verb after interval', async () => {

    // vi.useFakeTimers();

    render(TheHeadline);

    vi.advanceTimersToNextTimer();

    await nextTick();

    const actionPhrase = screen.getByRole('heading', {
      name: /create for everyone/i
    });

    expect(actionPhrase).toBeInTheDocument();

    // vi.useRealTimers();

  });
  it('removes interval when component disappears', () => {

    // vi.useFakeTimers();

    const clearInterval = vi.fn();

    vi.stubGlobal('clearInterval', clearInterval);

    const { unmount } = render(TheHeadline);

    unmount();

    expect(clearInterval).toHaveBeenCalled();

    vi.unstubAllGlobals();

    // vi.useRealTimers();
  });
});

