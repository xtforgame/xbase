import { newE2EPage } from '@stencil/core/testing';

describe('azwc-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-accordion></azwc-accordion>');

    const element = await page.find('azwc-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
