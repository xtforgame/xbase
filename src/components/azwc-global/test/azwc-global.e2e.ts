import { newE2EPage } from '@stencil/core/testing';

describe('azwc-global', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-global></azwc-global>');

    const element = await page.find('azwc-global');
    expect(element).toHaveClass('hydrated');
  });
});
