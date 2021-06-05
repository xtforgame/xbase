import { newSpecPage } from '@stencil/core/testing';
import { AzwcTabContent } from '../azwc-tab-content';

describe('azwc-tab-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcTabContent],
      html: `<azwc-tab-content></azwc-tab-content>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-tab-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-tab-content>
    `);
  });
});
