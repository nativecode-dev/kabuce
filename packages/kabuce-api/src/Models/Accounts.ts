import { PouchCollection, PouchModel } from "pouchorm";

import { Account } from "./Account";

export class Accounts extends PouchCollection<Account> {
  constructor() {
    super("data/account");
  }
}

export class AccountDocument extends PouchModel<Account> {}
