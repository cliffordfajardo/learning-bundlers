const esbuild = require('esbuild');

function buildCode() {
  esbuild.buildSync({
    bundle: true,
    entryPoints: ['src/index.js'],
    outfile: 'dist-esbuild-script/index.js',
  });
}

async function buildAndWatch(){
  const build = await esbuild.build({
    bundle: true,
    entryPoints: ['src/index.js'],
    outfile: 'dist-esbuild-script/index.js',
    watch: {
      onRebuild() {
        console.log('[watch] build finished')
      },
    },
  });
}

buildCode()
