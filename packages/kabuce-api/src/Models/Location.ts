import {
  Property,
  Required,
  MaxLength,
  MinLength,
  Pattern,
} from "@tsed/common";

import { Document } from "./Common/Document";
import { Constants } from "./Common/Constants";

export class Location extends Document {
  @Pattern(Constants.slug)
  @Property()
  @Required()
  organization_name: string;

  @MaxLength(256)
  @MinLength(8)
  @Property()
  @Required()
  organization_title: string;
}
