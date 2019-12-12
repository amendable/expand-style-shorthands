# Expand style shorthands

This expands style shorthand syntax (`padding: 1`) into long-hand syntax (`paddingTop: 1, paddingRight: 1, paddingBottom: 1, paddingLeft: 1`).

## Usage
```jsx sandbox
import { render } from 'react-dom'
import Box, { AmendableProvider } from '@amendable/core'
import expandStyleShorthands from '@amendable/expand-style-shorthands'

render(
  <AmendableProvider
    resolvers={[
      expandStyleShorthands(),
    ]}
  >
    <Box padding={1}>
      Padding is expanded on the DOM node
    </Box>
  </AmendableProvider>
)
```

## Supported props

It supports all the props that [inline-style-expand-shorthand](https://www.npmjs.com/package/inline-style-expand-shorthand)
supports.
