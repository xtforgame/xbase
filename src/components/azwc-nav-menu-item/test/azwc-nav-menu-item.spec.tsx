import { newSpecPage } from '@stencil/core/testing';
import { AzwcNavMenuItem } from '../azwc-nav-menu-item';

describe('azwc-nav-menu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcNavMenuItem],
      html: `<azwc-nav-menu-item></azwc-nav-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-nav-menu-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-nav-menu-item>
    `);
  });
});
