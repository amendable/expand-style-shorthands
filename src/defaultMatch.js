import _ from 'lodash'
import isNumber from 'is-number'
import defaultMatchKeys from './defaultMatchKeys'

export default ({
  key,
  value,
}) => {
  if (!_.includes(defaultMatchKeys, key)) return false
  if (_.isString(value)) return true
  if (isNumber(value)) return true

  return false
}
