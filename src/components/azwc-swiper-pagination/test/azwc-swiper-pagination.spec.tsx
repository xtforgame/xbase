import { newSpecPage } from '@stencil/core/testing';
import { AzwcSwiperPagination } from '../azwc-swiper-pagination';

describe('azwc-swiper-pagination', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcSwiperPagination],
      html: `<azwc-swiper-pagination></azwc-swiper-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-swiper-pagination>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-swiper-pagination>
    `);
  });
});
