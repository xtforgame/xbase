import { newSpecPage } from '@stencil/core/testing';
import { AzwcSpinner } from '../azwc-spinner';

describe('azwc-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcSpinner],
      html: `<azwc-spinner></azwc-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-spinner>
    `);
  });
});
