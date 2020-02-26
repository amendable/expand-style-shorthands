import _ from 'lodash'
import isNumber from 'is-number'

export default (keys) => ({
  key,
  value,
}) => {
  if (!keys.includes(key)) return false
  if (_.isString(value) || isNumber(value)) return true

  return false
}
