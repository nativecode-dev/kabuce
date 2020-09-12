import {
  BodyParams,
  Controller,
  Get,
  Inject,
  PathParams,
  Post,
  Put,
  Returns,
  ReturnsArray,
} from "@tsed/common";
import { Conflict, NotFound } from "@tsed/exceptions";

import { Template } from "../Models/Template";
import { Templates } from "../Models/Templates";

@Controller("/orgs/:organization_id/templates")
export class OrganizationTemplates {
  constructor(@Inject(Templates) private readonly templates: Templates) {}

  @Get()
  @ReturnsArray(Template)
  async all(@PathParams("organization_id") organization_id: string) {
    return await this.templates.find({ selector: { organization_id } });
  }

  @Post()
  @Returns(201, Template)
  @Returns(409, { description: "Conflict" })
  async post(
    @PathParams("organization_id") organization_id: string,
    @BodyParams(Template) template: Template
  ) {
    const existing = await this.templates.findOne({
      selector: { _id: template.slug, organization_id },
    });

    if (existing) {
      return await this.templates.upsert(template);
    }

    throw new Conflict("template exists");
  }

  @Put("/:template_id")
  @Returns(200, String)
  @Returns(404, { description: "Not found" })
  async put(
    @PathParams("organization_id") organization_id: string,
    @PathParams("template_id") template_id: string,
    @BodyParams() context: any
  ) {
    const template = await this.templates.findOne({
      selector: {
        _id: template_id,
        organization_id,
      },
    });

    if (template) {
      const resolved = this.templates.resolve(template, context);
      return resolved["content-type"];
    }

    throw new NotFound("template not found");
  }
}
