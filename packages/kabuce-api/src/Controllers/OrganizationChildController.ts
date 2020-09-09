import { Returns } from "@tsed/common";
import { NotFound } from "@tsed/exceptions";

import {
  Controller,
  Get,
  PathParams,
  Post,
  BodyParams,
  Put,
  ReturnsArray,
} from "@tsed/common";

import { OrganizationChild } from "../Models/OrganizationChild";
import { ModelKey } from "../Models/Common/ModelKey";

@Controller("/orgs/:organization_id/children")
export class OrganizationChildController {
  @Get()
  @ReturnsArray(OrganizationChild)
  @Returns(404, { description: "Not found" })
  all(
    @PathParams("organization_id") organization_id: string
  ): OrganizationChild[] {
    throw new NotFound(`Organization with id ${organization_id} not found`);
  }

  @Get("/:organization_child_id")
  @Returns(200, OrganizationChild)
  @Returns(404, { description: "Not found" })
  get(
    @PathParams("organization_child_id") organization_child_id: string
  ): OrganizationChild {
    throw new NotFound(
      `Organization with id ${organization_child_id} not found`
    );
  }

  @Post()
  @Returns(200, ModelKey)
  post(
    @BodyParams(OrganizationChild) organization_child: OrganizationChild
  ): ModelKey<OrganizationChild> {
    return { id: organization_child._id, model: organization_child };
  }

  @Put("/:organization_child_id")
  @Returns(200, ModelKey)
  put(
    @PathParams("organization_child_id") organization_child_id: string,
    @BodyParams(OrganizationChild) organization_child: OrganizationChild
  ): ModelKey<OrganizationChild> {
    return { id: organization_child._id, model: organization_child };
  }
}
