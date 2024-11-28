import { Router } from 'express';
import fs from 'fs';

const router = Router();

const environmentExtension =
  process.env.NODE_ENV === 'production' ? 'js' : 'ts';

const deleteFileExtension = new RegExp(`\\.${environmentExtension}$`, 'i');

function withoutExtension(
  str = `hello-world.${environmentExtension}`,
  exp: RegExp,
  newStr = ''
): string {
  return str.replace(exp, newStr);
}

function getRoutes() {
  return fs.readdirSync(__dirname).filter((file) => {
    const fileName = withoutExtension(file, deleteFileExtension);
    if (fileName !== 'index') {
      import(`./${fileName}`).then((module) => {
        router.use(`/${fileName}`, module.router);
      });
    }
  });
}

getRoutes();

export { router };
