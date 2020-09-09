import { Controller, Get } from "@tsed/common";

import { Accounts } from "../Models/Accounts";
import { Organizations } from "../Models/Organizations";

@Controller("/")
export class RootController {
  private readonly accounts = new Accounts();
  private readonly organizations = new Organizations();

  @Get()
  async get() {
    return {
      accounts: (await this.accounts.find()).length,
      organizations: (await this.organizations.find()).length,
    };
  }
}
