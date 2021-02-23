import { newSpecPage } from '@stencil/core/testing';
import { AzwcDialog } from '../azwc-dialog';

describe('azwc-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcDialog],
      html: `<azwc-dialog></azwc-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-dialog>
    `);
  });
});
