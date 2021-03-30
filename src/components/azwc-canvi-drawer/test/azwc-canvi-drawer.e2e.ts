import { newE2EPage } from '@stencil/core/testing';

describe('azwc-canvi-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-canvi-drawer></azwc-canvi-drawer>');

    const element = await page.find('azwc-canvi-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
