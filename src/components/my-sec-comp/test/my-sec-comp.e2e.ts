import { newE2EPage } from '@stencil/core/testing';

describe('my-sec-comp', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-sec-comp></my-sec-comp>');

    const element = await page.find('my-sec-comp');
    expect(element).toHaveClass('hydrated');
  });
});
