import fs from 'fs';
import path from 'path';
import buildTree from './buildtree.js';
import parse from './parsers.js';
import format from './formatters/index.js';

const getAbsolutPath = (filePath) => path.resolve(process.cwd(), filePath);
const readFile = (filePath) => fs.readFileSync(getAbsolutPath(filePath), 'utf-8');
const getFileFormat = (filePath) => path.extname(filePath).slice(1);

const genDiff = (path1, path2, formatName = 'stylish') => {
  const fileData1 = readFile(getAbsolutPath(path1));
  const fileData2 = readFile(getAbsolutPath(path2));
  const file1 = parse(fileData1, getFileFormat(path1));
  const file2 = parse(fileData2, getFileFormat(path2));

  const diffTree = buildTree(file1, file2);

  return format(diffTree, formatName);
};

export default genDiff;
