import { newSpecPage } from '@stencil/core/testing';
import { AzwcTabs } from '../azwc-tabs';

describe('azwc-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcTabs],
      html: `<azwc-tabs></azwc-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-tabs>
    `);
  });
});
