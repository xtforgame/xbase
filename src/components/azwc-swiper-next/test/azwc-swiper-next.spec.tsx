import { newSpecPage } from '@stencil/core/testing';
import { AzwcSwiperNext } from '../azwc-swiper-next';

describe('azwc-swiper-next', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcSwiperNext],
      html: `<azwc-swiper-next></azwc-swiper-next>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-swiper-next>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-swiper-next>
    `);
  });
});
