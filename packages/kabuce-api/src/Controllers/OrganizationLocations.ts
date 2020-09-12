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

import { ModelKey } from "../Models/Common/ModelKey";
import { Location } from "../Models/Location";

@Controller("/orgs/:organization_id/locations")
export class OrganizationLocations {
  @Get()
  @ReturnsArray(Location)
  @Returns(404, { description: "Not found" })
  all(@PathParams("organization_id") organization_id: string) {
    throw new NotFound(`Organization with id ${organization_id} not found`);
  }

  @Get("/:organization_location_id")
  @Returns(200, Location)
  @Returns(404, { description: "Not found" })
  get(
    @PathParams("organization_location_id") organization_location_id: string
  ) {
    throw new NotFound(
      `Organization with id ${organization_location_id} not found`
    );
  }

  @Post()
  @Returns(200, ModelKey)
  post(@BodyParams(Location) organization_child: Location) {
    return { id: organization_child._id, model: organization_child };
  }

  @Put("/:organization_location_id")
  @Returns(200, ModelKey)
  put(
    @PathParams("organization_location_id") organization_location_id: string,
    @BodyParams(Location) organization_child: Location
  ) {
    return { id: organization_child._id, model: organization_child };
  }
}
