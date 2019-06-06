import { expandProperty } from 'inline-style-expand-shorthand'
import defaultMatch from './defaultMatch'

export default ({ match = defaultMatch } = { match: defaultMatch }) => ({
  match,
  resolve: ({ key, value }) => (
    expandProperty(key, value)
  ),
})
