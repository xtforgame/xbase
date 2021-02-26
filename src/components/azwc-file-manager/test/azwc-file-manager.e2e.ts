import { newE2EPage } from '@stencil/core/testing';

describe('azwc-file-manager', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-file-manager></azwc-file-manager>');

    const element = await page.find('azwc-file-manager');
    expect(element).toHaveClass('hydrated');
  });
});
