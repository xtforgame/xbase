import { newSpecPage } from '@stencil/core/testing';
import { AzwcFileManager } from '../azwc-file-manager';

describe('azwc-file-manager', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AzwcFileManager],
      html: `<azwc-file-manager></azwc-file-manager>`,
    });
    expect(page.root).toEqualHtml(`
      <azwc-file-manager>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </azwc-file-manager>
    `);
  });
});
