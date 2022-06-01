import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import dragon from './dragon'
import element from './element'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    dragon,
    element,
  ]),
})
