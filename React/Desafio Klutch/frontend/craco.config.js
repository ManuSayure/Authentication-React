const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#228A95',
                          '@menu-item-active-bg': '@primary-color',
                          '@font-family': 'Inria Sans',
                          '@theme': 'default'
          },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
