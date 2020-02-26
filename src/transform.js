import _ from 'lodash';
import isNumber from 'is-number';

export default (val) => {
  if (!isNumber(val)) return val;

  return _.toNumber(val);
};
