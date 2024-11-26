import { Router } from 'express';
import fs from 'fs';

const router = Router();

enum EXTENSIONS {
  TS = 'ts',
}

// Separar
const deleteFileExtension = new RegExp(`\\.${EXTENSIONS.TS}$`, 'i');

function withoutExtension(str = 'hello.ts', exp: RegExp, newStr = ''): string {
  return str.replace(exp, newStr);
}

function getRoutes() {
  return fs.readdirSync(__dirname).filter((file) => {
    const fileName = withoutExtension(file, deleteFileExtension);

    if (fileName !== 'index') {
      console.log(fileName);
      import(`./${fileName}`).then((module) => {
        router.use(`/${fileName}`, module.router);
      });
    }
  });
}

getRoutes();

export { router };
