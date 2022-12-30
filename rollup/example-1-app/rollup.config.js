/** @type {import('rollup').RollupOptions} */
export default {
  input: './src/index.js',
  output: {
    file: './dist-cli/index.js',
    format: 'esm',
  },
  plugins: [
    {
      name: 'my-1st-plugin',
      async resolveId(source, importer, options) {
        console.group('resolveId args');
        console.log('source', source);
        console.log('importer', importer);
        console.log('options', options);
        console.groupEnd();
      },
    },
  ],
};
