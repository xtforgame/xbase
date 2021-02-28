import { newE2EPage } from '@stencil/core/testing';

describe('azwc-spinner-mask', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-spinner-mask></azwc-spinner-mask>');

    const element = await page.find('azwc-spinner-mask');
    expect(element).toHaveClass('hydrated');
  });
});
