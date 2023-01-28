import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ba-democomponents',
  bundles: [{components: [
    'my-mover', 
    'my-event-emitter', 
    'my-event-listener', 
    'my-propbinding', 
    'my-parent',
    'my-child',
    'my-watchman'
  ]}],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
