import { newE2EPage } from '@stencil/core/testing';

describe('azwc-nav-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-nav-menu></azwc-nav-menu>');

    const element = await page.find('azwc-nav-menu');
    expect(element).toHaveClass('hydrated');
  });
});
