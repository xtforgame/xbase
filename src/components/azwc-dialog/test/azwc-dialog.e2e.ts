import { newE2EPage } from '@stencil/core/testing';

describe('azwc-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-dialog></azwc-dialog>');

    const element = await page.find('azwc-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
