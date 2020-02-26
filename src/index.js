import { expandProperty } from 'inline-style-expand-shorthand';
import _ from 'lodash';
import defaultMatch from './defaultMatch';
import defaultMatchKeys from './defaultMatchKeys';
import transform from './transform';

const getKeys = (keys) => {
  if (_.isFunction(keys)) {
    return keys(defaultMatchKeys);
  }

  return keys || defaultMatchKeys;
};

export default ({ match, keys } = {}) => ({
  match: defaultMatch(getKeys(keys)),
  resolve: ({ key, value }) =>
    _.reduce(
      expandProperty(key, value),
      (memo, val, key) => ({
        ...memo,
        [key]: transform(val),
      }),
      {}
    ),
});
