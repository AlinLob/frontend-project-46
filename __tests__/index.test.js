import { test, expect } from '@jest/globals';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const expectedfile = readFile('file.txt');

describe('check json', () => {
  test('genDiff', () => {
    const actual = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
    expect(actual).toBe(expectedfile);
  });
});

describe('check yml', () => {
  test('genDiff', () => {
    const actual = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'));
    expect(actual).toBe(expectedfile);
  });
});
