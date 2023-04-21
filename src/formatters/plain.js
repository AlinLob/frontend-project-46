import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : value;
};

const plain = (data) => {
  const iter = (node, keys = []) => {
    const result = node.reduce((acc, item) => {
      const newKeys = [...keys, item.key];
      switch (item.type) {
        case 'nested':
          return [...acc, iter(item.children, newKeys)];
        case 'deleted':
          return [...acc, `Property '${newKeys.join('.')}' was removed`];
        case 'added':
          return [...acc, `Property '${newKeys.join('.')}' was added with value: ${stringify(item.value)}`];
        case 'changed':
          return [...acc, `Property '${newKeys.join('.')}' was updated. From ${stringify(item.value1)} to ${stringify(item.value2)}`];
        case 'unchanged':
          return acc;
        default:
          throw new Error(`Unknown type ${item.type}`);
      }
    }, []);

    return result.join('\n');
  };

  return iter(data, []);
};

export default plain;
