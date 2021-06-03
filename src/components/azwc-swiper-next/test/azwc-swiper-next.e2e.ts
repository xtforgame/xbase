import { newE2EPage } from '@stencil/core/testing';

describe('azwc-swiper-next', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<azwc-swiper-next></azwc-swiper-next>');

    const element = await page.find('azwc-swiper-next');
    expect(element).toHaveClass('hydrated');
  });
});
