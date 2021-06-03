import { newSpecPage } from '@stencil/core/testing';
import { AzwcSwiperPrev } from '../azwc-swiper-prev';

describe('azwc-swiper-prev', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcSwiperPrev],
      html: `<azwc-swiper-prev></azwc-swiper-prev>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-swiper-prev>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-swiper-prev>
    `);
  });
});
