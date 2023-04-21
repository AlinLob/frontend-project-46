# Difference Calculator
### Hexlet tests and linter status:
[![Actions Status](https://github.com/AlinLob/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/AlinLob/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/4ed2ec75ca80162b428b/maintainability)](https://codeclimate.com/github/AlinLob/frontend-project-46/maintainability)
[![hexlet-check](https://github.com/AlinLob/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/AlinLob/frontend-project-46/actions/workflows/hexlet-check.yml)
[![Node CI](https://github.com/AlinLob/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/AlinLob/frontend-project-46/actions/workflows/nodejs.yml)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4ed2ec75ca80162b428b/test_coverage)](https://codeclimate.com/github/AlinLob/frontend-project-46/test_coverage)

Description:
---
**`Difference calculator`** is a console utility designed to calculate and display the difference between two data structures. The utility can display the difference in 2 formats.

**`Supporting formats:`** JSON, YML, YAML

## Installation: 
____
``` 
    git clone https://github.com/AlinLob/frontend-project-46.git
    cd frontend-project-46
    make install
    npm link
```
____


## How use:
____
+ ``$ gendiff <filepath1> <filepath2>:`` show diff with default format (default: "stylish")
+ ``$ gendiff -f, --format [plain, json, stylish] <filepath1> <filepath2>:`` show diff with plain, json or stylish format
+ ``$ gendiff -h, --help:`` display help for command
____
```  
   Usage: gendiff [options] <filepath1> <filepath2>

   Compares two configuration files and shows a difference.

   Options:
     -V, --version         output the version number
     -f, --format, <type>  output format (default: "stylish")
     -h, --help            output usage information

```
____

## Demo:
___
### 1. Output of help:
[![asciicast](https://asciinema.org/a/ttFPtOXrMBrGHSBIOJHpH2YU0.svg)](https://asciinema.org/a/ttFPtOXrMBrGHSBIOJHpH2YU0)
___
### 2. Difference between 2 flat JSON or YAML files
[![asciicast](https://asciinema.org/a/lJ6Ijaor38NPh42SXMBej1ucS.svg)](https://asciinema.org/a/lJ6Ijaor38NPh42SXMBej1ucS)
___
### 3. Difference between 2 nested JSON or YAML files in a stylish format
[![asciicast](https://asciinema.org/a/M5sWAl7BkExZ5YYfQaFnYKJXu.svg)](https://asciinema.org/a/M5sWAl7BkExZ5YYfQaFnYKJXu)
___
### 4. Difference between 2 nested JSON or YAML files in a plain format
[![asciicast](https://asciinema.org/a/IiwjSeLFuThJn3Ua3xe11J3gX.svg)](https://asciinema.org/a/IiwjSeLFuThJn3Ua3xe11J3gX)
___
### 5. Difference between 2 nested JSON or YAML files in a JSON format
[![asciicast](https://asciinema.org/a/Ze36nA1jAogddAbDfrysO7sTj.svg)](https://asciinema.org/a/Ze36nA1jAogddAbDfrysO7sTj)
___
