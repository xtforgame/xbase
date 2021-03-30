import { newSpecPage } from '@stencil/core/testing';
import { AzwcCanviDrawer } from '../azwc-canvi-drawer';

describe('azwc-canvi-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcCanviDrawer],
      html: `<azwc-canvi-drawer></azwc-canvi-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-canvi-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-canvi-drawer>
    `);
  });
});
