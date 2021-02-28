import { newE2EPage } from '@stencil/core/testing';

describe('azwc-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-spinner></azwc-spinner>');

    const element = await page.find('azwc-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
