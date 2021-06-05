import { newSpecPage } from '@stencil/core/testing';
import { AzwcTabLink } from '../azwc-tab-link';

describe('azwc-tab-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcTabLink],
      html: `<azwc-tab-link></azwc-tab-link>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-tab-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-tab-link>
    `);
  });
});
