import { test, expect } from '@jest/globals';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('check diff', () => {
  test('genDiff', () => {
    const actual = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
    expect(actual).toBe(actual);
  });
});
