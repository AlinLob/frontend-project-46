import fs from 'fs';
import path from 'path';
import { buildTree, getDiff } from './buildtree.js';
import parse from './parsers.js';

const getAbsolutPath = (filePath) => path.resolve(process.cwd(), filePath);
const readFile = (filePath) => fs.readFileSync(getAbsolutPath(filePath), 'utf-8');
const getExtname = (filePath) => path.extname(filePath);

const getFormatFile = (filePath) => {
  const dataContent = readFile(filePath);
  const extension = getExtname(filePath);
  return parse(dataContent, extension);
};

const genDiff = (filepath1, filepath2) => {
  const file1 = getFormatFile(filepath1);
  const file2 = getFormatFile(filepath2);
  return getDiff(buildTree(file1, file2));
};
export default genDiff;
