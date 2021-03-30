import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'xbase',
  globalScript: 'src/global.ts',
  globalStyle: 'public/css/style.css',
  hashFileNames: false,
  plugins: [
    sass(),
  ],
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
