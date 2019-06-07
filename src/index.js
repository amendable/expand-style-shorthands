import { expandProperty } from 'inline-style-expand-shorthand'
import _ from 'lodash'
import defaultMatch from './defaultMatch'
import transform from './transform'

export default ({ match = defaultMatch } = { match: defaultMatch }) => ({
  match,
  resolve: ({ key, value }) => (
    _.reduce(expandProperty(key, value), (memo, val, key) => ({
      ...memo,
      [key]: transform(val),
    }), {})
  ),
})
