import { rollup, watch } from 'rollup';

/**
 * Build our code and output the files.
 * This is similar to the CLI command "npx rollup -c rollup.config.js"
 * which is used for building the production bundle.
 */
async function buildCode() {
  const build = await rollup({
    input: './src/index.js',
  });

  const buildOutput = await build.write({
    esModule: true,
    file: './dist-rollup-script/index.js',
    format: 'esm',
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
  });
}

/**
 * Build our code and output the files.
 * This is similar to the CLI command "npx rollup -c --watch rollup.config.js"
 * This is used during development mode so don't have to re-run your CLI command over and over
 * when files changes occur.
 */
async function buildAndWatch() {
  const watcher = watch({
    input: './src/index.js',
    output: {
      esModule: true,
      file: './dist-rollup-script/index.js',
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
  });

  watcher.on('event', (event) => {
    console.log(event.code);
  });
}

async function main() {
  // await buildCode()
  await buildAndWatch();
}

main().catch((error) => {
  console.error(`Error occured when attempting to build: `, error);
});
