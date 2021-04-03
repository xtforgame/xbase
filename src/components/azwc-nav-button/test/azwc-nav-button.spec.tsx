import { newSpecPage } from '@stencil/core/testing';
import { AzwcNavButton } from '../azwc-nav-button';

describe('azwc-nav-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcNavButton],
      html: `<azwc-nav-button></azwc-nav-button>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-nav-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-nav-button>
    `);
  });
});
