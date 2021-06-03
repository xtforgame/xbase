import { newE2EPage } from '@stencil/core/testing';

describe('azwc-swiper-prev', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-swiper-prev></azwc-swiper-prev>');

    const element = await page.find('azwc-swiper-prev');
    expect(element).toHaveClass('hydrated');
  });
});
