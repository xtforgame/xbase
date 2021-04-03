import { newE2EPage } from '@stencil/core/testing';

describe('azwc-nav-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-nav-button></azwc-nav-button>');

    const element = await page.find('azwc-nav-button');
    expect(element).toHaveClass('hydrated');
  });
});
