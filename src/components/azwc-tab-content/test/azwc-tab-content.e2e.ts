import { newE2EPage } from '@stencil/core/testing';

describe('azwc-tab-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-tab-content></azwc-tab-content>');

    const element = await page.find('azwc-tab-content');
    expect(element).toHaveClass('hydrated');
  });
});
