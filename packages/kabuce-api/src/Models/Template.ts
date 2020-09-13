import { v4 } from 'uuid'

import { Default, MaxLength, MinLength, Pattern, Property, Required } from '@tsed/common'

import { Document } from './Common/Document'
import { Constants } from './Common/Constants'

export class Template extends Document {
  _id = v4()

  @Default({})
  @Property()
  @Required()
  context: any

  @Default('text/html')
  @Pattern(Constants.mediatype)
  @Property()
  @Required()
  mediatype: string

  @MaxLength(256)
  @MinLength(8)
  @Property()
  @Required()
  name: string

  @Pattern(Constants.slug)
  @Property()
  @Required()
  organization_id: string

  @Pattern(Constants.slug)
  @Property()
  @Required()
  slug: string

  @Property()
  @Required()
  template: string
}
