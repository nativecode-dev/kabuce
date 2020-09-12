import { Conflict, NotFound, PreconditionFailed } from "@tsed/exceptions";

import {
  Controller,
  Get,
  PathParams,
  Returns,
  ReturnsArray,
  Post,
  BodyParams,
  Put,
  Res,
  Inject,
} from "@tsed/common";

import * as Models from "../Models/Organizations";
import { CreateOrganization, Organization } from "../Models/Organization";

@Controller("/orgs")
export class Organizations {
  constructor(@Inject() private readonly organizations: Models.Organizations) {}

  @Get()
  @ReturnsArray(200, Organization)
  async all() {
    return await this.organizations.find();
  }

  @Get("/:organization_id")
  @Returns(200, Organization)
  @Returns(404, { description: "Not found" })
  async get(@PathParams("organization_id") organization_id: string) {
    const organization = await this.organizations.findById(organization_id);

    if (organization === null) {
      throw new NotFound(`Organization with id ${organization_id} not found`);
    }

    return organization;
  }

  @Post()
  @Returns(201, Organization)
  @Returns(409, { description: "Conflict" })
  async post(@BodyParams(CreateOrganization) organization: CreateOrganization) {
    const existing = await this.organizations.findById(organization.domain);

    if (existing === null) {
      return this.organizations.upsert(organization);
    }

    throw new Conflict("organization exists");
  }

  @Put("/:organization_id")
  @Returns(200, Organization)
  @Returns(201, Organization)
  async put(
    @PathParams("organization_id") organization_id: string,
    @BodyParams(CreateOrganization) organization: CreateOrganization,
    @Res() res: Res
  ) {
    const existing = await this.organizations.findById(organization_id);

    if (existing) {
      return existing;
    }

    res.status(201);

    return await this.organizations.upsert(organization);
  }

  @Get("/:organization_id/verified")
  @Returns(200, Boolean)
  @Returns(404, { description: "Not found" })
  async verified(@PathParams("organization_id") organization_id: string) {
    const organization = await this.organizations.findById(organization_id);

    if (organization) {
      return this.organizations.verify(organization);
    }

    throw new NotFound("organization not found");
  }

  @Put("/:organization_id/verify")
  @Returns(200, Organizations)
  @Returns(404, { description: "Not found" })
  @Returns(412, { description: "Precondition failed" })
  async verify(@PathParams("organization_id") organization_id: string) {
    const organization = await this.organizations.findById(organization_id);

    if (organization === null) {
      throw new NotFound("organization not found");
    }

    if (organization.verified) {
      return organization;
    }

    const verified = await this.organizations.verify(organization);

    if (verified === false) {
      throw new PreconditionFailed("waiting for dns");
    }

    return await this.organizations.upsert({ ...organization, verified });
  }

  @Get("/:organization_id/verification_code")
  @Returns(200, String)
  @Returns(404, { description: "Not found" })
  async verification_code(
    @PathParams("organization_id") organization_id: string
  ) {
    const organization = await this.organizations.findById(organization_id);

    if (organization) {
      return organization.verification_code;
    }

    throw new NotFound("organization not found");
  }
}
