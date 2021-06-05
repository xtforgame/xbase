import { newE2EPage } from '@stencil/core/testing';

describe('azwc-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-tabs></azwc-tabs>');

    const element = await page.find('azwc-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
