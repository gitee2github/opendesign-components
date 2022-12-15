import fs from 'fs-extra';
import path from 'path';
import glob from 'glob';
import Config from './config';
import sass from 'sass';

const base = process.cwd();

export default function main() {
  console.log('generating style...');
  const input = path.resolve(base, Config.input);

  // compile scss
  const files = glob.sync('**/*.{scss,css}', {
    cwd: input,
  });

  files.forEach(fl => {
    const fPath = path.resolve(input, fl);
    fs.copySync(fPath, `es/${fl}`);
    fs.copySync(fPath, `lib/${fl}`);

    if (/index\.scss/.test(fl)) {
      console.log(`compiling ${fl}`);
      const result = sass.compile(fPath, {});

      const cssName = fl.replace('.scss', '.css');
      fs.outputFile(`es/${cssName}`, result.css);
      fs.outputFile(`lib/${cssName}`, result.css);
    }
  });
  // build index
  const idxFiles = glob.sync('**/style/**/index.ts', {
    cwd: input,
  });
  idxFiles.forEach(fl => {
    const fpath = path.resolve(input, fl);
    const toFl = fl.replace(/\.ts$/, '.js');
    fs.copySync(fpath, `es/${toFl}`);
    fs.copySync(fpath, `lib/${toFl}`);

    const content = fs.readFileSync(fpath, 'utf-8');
    const css = content.replace('.scss', '.css');
    const cssFile = fl.replace(/index\.ts$/, 'css.js');
    fs.outputFile(`es/${cssFile}`, css);
    fs.outputFile(`lib/${cssFile}`, css);
  });
}