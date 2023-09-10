import run from '@fastcampus/esbuild-config';
import pkg from './package.json' assert { type: 'json' };

run({
  pkg,
})
