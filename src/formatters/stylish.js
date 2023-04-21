import _ from 'lodash';

const indent = (depth, str = ' ', spacesCount = 4) => str.repeat((depth * spacesCount) - 2);

const stringify = (data, depth = 1) => {
  if (!_.isObject(data)) {
    return data;
  }
  const entries = Object.entries(data);
  const result = entries.map(([key, value]) => `${indent(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`);
  return `{\n${result.join('\n')}\n  ${indent(depth)}}`;
};

const stylish = (data) => {
  const iter = (node, depth = 1) => {
    const result = node.map((item) => {
      switch (item.type) {
        case 'nested': {
          return `${indent(depth)}  ${item.key}: {\n${iter(item.children, depth + 1)}\n${indent(depth)}  }`;
        }
        case 'deleted':
          return `${indent(depth)}- ${item.key}: ${stringify(item.value, depth)}`;
        case 'added':
          return `${indent(depth)}+ ${item.key}: ${stringify(item.value, depth)}`;
        case 'changed':
          return (`${indent(depth)}- ${item.key}: ${stringify(item.value1, depth)}\n${indent(depth)}+ ${item.key}: ${stringify(item.value2, depth)}`);
        case 'unchanged':
          return `${indent(depth)}  ${item.key}: ${stringify(item.value, depth)}`;
        default:
          throw new Error(`Unknown type ${item.type}`);
      }
    });
    return result.join('\n');
  };
  return `{\n${iter(data)}\n}`;
};
export default stylish;
