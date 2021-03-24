import { newE2EPage } from '@stencil/core/testing';

describe('azwc-swiper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-swiper></azwc-swiper>');

    const element = await page.find('azwc-swiper');
    expect(element).toHaveClass('hydrated');
  });
});
