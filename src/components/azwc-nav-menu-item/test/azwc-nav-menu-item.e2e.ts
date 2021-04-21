import { newE2EPage } from '@stencil/core/testing';

describe('azwc-nav-menu-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-nav-menu-item></azwc-nav-menu-item>');

    const element = await page.find('azwc-nav-menu-item');
    expect(element).toHaveClass('hydrated');
  });
});
