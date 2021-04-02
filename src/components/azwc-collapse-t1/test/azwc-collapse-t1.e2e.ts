import { newE2EPage } from '@stencil/core/testing';

describe('azwc-collapse-t1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-collapse-t1></azwc-collapse-t1>');

    const element = await page.find('azwc-collapse-t1');
    expect(element).toHaveClass('hydrated');
  });
});
