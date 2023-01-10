import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';


export const config: Config = {
  namespace: 'ba-democomponents',
  bundles: [{components: ['my-mover', 'my-event-emitter', 'my-event-listener', 'my-propbinding']}],
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
    vueOutputTarget({
      componentCorePackage: 'ba-democomponents', // i.e.: stencil-library
      proxiesFile: '../vue-library/src/democomponents.ts',
    }),
  ],
};
