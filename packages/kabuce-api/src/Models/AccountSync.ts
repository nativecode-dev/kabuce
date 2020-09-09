import { Document } from "./Common/Document";
import { Required, Property, MaxLength } from "@tsed/common";

export class AccountSync extends Document {
  @MaxLength(256)
  @Required()
  @Property()
  account_sync_handler: string
}
