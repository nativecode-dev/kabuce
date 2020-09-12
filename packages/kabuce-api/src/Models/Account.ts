import {
  CollectionOf,
  Default,
  Description,
  Email,
  MaxLength,
  MinLength,
  Property,
  Required,
} from "@tsed/common";

import { AccountSync } from "./AccountSync";
import { Document } from "./Common/Document";

export class Account extends Document {
  @Description("Account Reference can be used for any purpose.")
  @MaxLength(128)
  @MinLength(8)
  @Property()
  @Required()
  account_reference: string;

  @Default(true)
  @Property()
  enabled: boolean;

  @Description("Account Owner's email.")
  @Email()
  @Property()
  @Required()
  owner_email: string;

  @Description("Account Owner's name.")
  @MaxLength(128)
  @MinLength(8)
  @Property()
  @Required()
  owner_name: string;

  @Default(undefined)
  @Description("Account Owner's optional legal name.")
  @MaxLength(128)
  @MinLength(8)
  @Property()
  owner_legal_name: string;

  @CollectionOf(AccountSync)
  @Default([])
  @Property()
  sync: AccountSync[];

  sync_secret_hash: string;
}
