import { newSpecPage } from '@stencil/core/testing';
import { AzwcNavMenu } from '../azwc-nav-menu';

describe('azwc-nav-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcNavMenu],
      html: `<azwc-nav-menu></azwc-nav-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-nav-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-nav-menu>
    `);
  });
});
