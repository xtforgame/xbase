import { newSpecPage } from '@stencil/core/testing';
import { AzwcCollapseT1 } from '../azwc-collapse-t1';

describe('azwc-collapse-t1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcCollapseT1],
      html: `<azwc-collapse-t1></azwc-collapse-t1>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-collapse-t1>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-collapse-t1>
    `);
  });
});
