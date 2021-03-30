import { newSpecPage } from '@stencil/core/testing';
import { AzwcAccordion } from '../azwc-accordion';

describe('azwc-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcAccordion],
      html: `<azwc-accordion></azwc-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-accordion>
    `);
  });
});
