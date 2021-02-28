import { newSpecPage } from '@stencil/core/testing';
import { AzwcSpinnerMask } from '../azwc-spinner-mask';

describe('azwc-spinner-mask', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcSpinnerMask],
      html: `<azwc-spinner-mask></azwc-spinner-mask>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-spinner-mask>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-spinner-mask>
    `);
  });
});
