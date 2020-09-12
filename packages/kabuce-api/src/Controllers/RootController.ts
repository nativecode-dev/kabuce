import { Controller, Get, Inject } from "@tsed/common";

import { Accounts } from "../Models/Accounts";
import { Organizations } from "../Models/Organizations";

@Controller("/")
export class RootController {
  constructor(
    @Inject() private readonly accounts: Accounts,
    @Inject() private readonly organizations: Organizations
  ) {}

  @Get()
  async get() {
    return {
      accounts: (await this.accounts.find()).length,
      organizations: (await this.organizations.find()).length,
    };
  }
}
