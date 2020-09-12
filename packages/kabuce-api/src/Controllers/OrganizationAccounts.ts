import { Inject, Returns } from "@tsed/common";

import {
  Controller,
  Get,
  Post,
  BodyParams,
  Put,
  ReturnsArray,
  PathParams,
} from "@tsed/common";

import { NotFound } from "@tsed/exceptions";

import { Account } from "../Models/Account";
import { Accounts } from "../Models/Accounts";
import { ModelKey } from "../Models/Common/ModelKey";

@Controller("/orgs/:organization_id/accounts")
export class OrganizationAccounts {
  constructor(@Inject(Accounts) private readonly accounts: Accounts) {}

  @Get()
  @ReturnsArray(Account)
  @Returns(404, { description: "Not found" })
  all(@PathParams("organization_id") organization_id: string): Account[] {
    return [];
  }

  @Get("/:account_id")
  @Returns(404, { description: "Not found" })
  get(
    @PathParams("organization_id") organization_id: string,
    @PathParams("account_id") account_id: string
  ): Account {
    throw new NotFound(`Account with id ${account_id} not found.`);
  }

  @Post()
  @Returns(201, ModelKey)
  @Returns(403, { description: "Bad request" })
  post(
    @PathParams("organization_id") organization_id: string,
    @BodyParams() account: Account
  ): ModelKey<Account> {
    return { id: account._id, model: account };
  }

  @Put("/:account_id")
  @Returns(201, ModelKey)
  @Returns(403, { description: "Bad request" })
  @Returns(409, { description: "Conflict" })
  put(
    @PathParams("organization_id") organization_id: string,
    @BodyParams() account: Account
  ): ModelKey<Account> {
    return { id: account._id, model: account };
  }
}
