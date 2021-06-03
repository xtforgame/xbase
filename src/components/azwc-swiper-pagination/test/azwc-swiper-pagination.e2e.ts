import { newE2EPage } from '@stencil/core/testing';

describe('azwc-swiper-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-swiper-pagination></azwc-swiper-pagination>');

    const element = await page.find('azwc-swiper-pagination');
    expect(element).toHaveClass('hydrated');
  });
});
