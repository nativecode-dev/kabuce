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
  @MaxLength(128)
  @MinLength(8)
  @Required()
  @Description("Account Reference can be used for any purpose.")
  @Property()
  account_reference: string;

  @Default(true)
  @Property()
  enabled: boolean;

  @Email()
  @Required()
  @Description("Account Owner's email.")
  @Property()
  owner_email: string;

  @MaxLength(128)
  @MinLength(8)
  @Required()
  @Description("Account Owner's name.")
  @Property()
  owner_name: string;

  @MaxLength(128)
  @MinLength(8)
  @Default(undefined)
  @Description("Account Owner's optional legal name.")
  @Property()
  owner_legal_name: string;

  @CollectionOf(AccountSync)
  @Default([])
  @Property()
  sync: AccountSync[];

  sync_secret_hash: string;
}
