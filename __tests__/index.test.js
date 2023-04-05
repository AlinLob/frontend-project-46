import { test, expect } from '@jest/globals';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectedStylish = readFile('stylish.txt');

describe('genDiff test', () => {
  test('should be work with yml', () => {
    const filePath1 = getFixturePath('file1.yml');
    const filePath2 = getFixturePath('file2.yml');

    expect(genDiff(filePath1, filePath2)).toEqual(expectedStylish);
    expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(expectedStylish);
  });

  test('should be work with json', () => {
    const filePath1 = getFixturePath('file1.json');
    const filePath2 = getFixturePath('file2.json');

    expect(genDiff(filePath1, filePath2)).toEqual(expectedStylish);
    expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(expectedStylish);
  });
});
