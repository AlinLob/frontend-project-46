import fs from 'fs';
import _ from 'lodash';
import path from 'path';

const getAbsolutPath = (filePath) => path.resolve(process.cwd(), filePath);

const readFile = (filePath) => fs.readFileSync(getAbsolutPath(filePath), 'utf-8');

const getObject = (filePath) => JSON.parse(readFile(filePath));

const buildTree = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const result = keys.map((key) => {
    if (!_.has(file1, key)) {
      return { key, value: file2[key], type: 'added' };
    }
    if (!_.has(file2, key)) {
      return { key, value: file1[key], type: 'deleted' };
    }
    if (file1[key] !== file2[key]) {
      return {
        key,
        value1: file1[key],
        value2: file2[key],
        type: 'changed',
      };
    }
    return { key, value: file1[key], type: 'unchanged' };
  });
  return result;
};

const getDiff = (diffInfo) => {
  const result = diffInfo.map((diff) => {
    const typediff = diff.type;
    switch (typediff) {
      case 'deleted':
        return `  - ${diff.key}: ${diff.value}`;
      case 'unchanged':
        return `    ${diff.key}: ${diff.value}`;
      case 'changed':
        return (`  - ${diff.key}: ${diff.value1} \n  + ${diff.key}: ${diff.value2}`);
      case 'added':
        return `  + ${diff.key}: ${diff.value}`;
      default:
        return null;
    }
  });
  return `{\n${result.join('\n')}\n}`;
};

const genDiff = (filepath1, filepath2) => {
  const object1 = getObject(filepath1);
  const object2 = getObject(filepath2);
  return getDiff(buildTree(object1, object2));
};
export default genDiff;
