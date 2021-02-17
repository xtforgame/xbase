import { newSpecPage } from '@stencil/core/testing';
import { MySecComp } from '../my-sec-comp';

describe('my-sec-comp', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MySecComp],
      html: `<my-sec-comp></my-sec-comp>`,
    });
    expect(page.root).toEqualHtml(`
      <my-sec-comp>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-sec-comp>
    `);
  });
});
