import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'xbase',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy: [
        { src: 'public', dest: './' },
        { src: 'pages' }
      ],
      serviceWorker: null, // disable service workers
    },
  ],
};
