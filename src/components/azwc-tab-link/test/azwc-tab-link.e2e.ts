import { newE2EPage } from '@stencil/core/testing';

describe('azwc-tab-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-tab-link></azwc-tab-link>');

    const element = await page.find('azwc-tab-link');
    expect(element).toHaveClass('hydrated');
  });
});
