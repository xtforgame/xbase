import { newSpecPage } from '@stencil/core/testing';
import { AzwcSwiper } from '../azwc-swiper';

describe('azwc-swiper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcSwiper],
      html: `<azwc-swiper></azwc-swiper>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-swiper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-swiper>
    `);
  });
});
