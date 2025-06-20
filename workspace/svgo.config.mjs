export default {
  js2svg: {
    pretty: true,
    indent: 2
  },
  plugins: [
    'preset-default',
    {
      name: 'mergePaths',
      active: false
    },
    'removeXMLNS',
    'cleanupListOfValues',
    'removeRasterImages',
    'sortAttrs'
  ]
};
