import {
  Property,
  Required,
  MaxLength,
  MinLength,
  CollectionOf,
  Default,
  Pattern,
  Email,
} from "@tsed/common";

import { Document } from "./Common/Document";
import { Constants } from "./Common/Constants";
import { Location } from "./Location";

export class Organization extends Document {
  @Pattern(Constants.domain)
  @Property()
  @Required()
  domain: string;

  @Email()
  @Property()
  @Required()
  email: string;

  @Pattern(Constants.slug)
  @Property()
  @Required()
  organization_name: string;

  @MaxLength(256)
  @MinLength(8)
  @Property()
  @Required()
  organization_title: string;

  @CollectionOf(Location)
  @Default([])
  @Property()
  topology: Location[];

  @Property()
  verification_code: string;

  organization_password_hash: string;
  verified: boolean | undefined;
}

export class CreateOrganization extends Organization {
  @MaxLength(4096)
  @MinLength(24)
  @Property()
  @Required()
  password: string
}
