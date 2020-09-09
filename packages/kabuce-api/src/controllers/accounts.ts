import { Controller, Get } from "@tsed/common";

@Controller("/accounts")
export class AccountsController {
  @Get()
  findAll(): string {
    return "This action returns all calendars";
  }
}
