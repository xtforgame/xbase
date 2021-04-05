import { newSpecPage } from '@stencil/core/testing';
import { AzwcGlobal } from '../azwc-global';

describe('azwc-global', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcGlobal],
      html: `<azwc-global></azwc-global>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-global>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-global>
    `);
  });
});
