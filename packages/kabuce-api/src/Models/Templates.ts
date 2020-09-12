import { all } from "deepmerge";
import { render } from "mustache";

import { Inject, Injectable } from "@tsed/di";

import { Template } from "./Template";
import { Collection } from "./Common/Collection";
import { AppConfiguration } from "../AppConfiguration";

@Injectable()
export class Templates extends Collection<Template> {
  constructor(@Inject(AppConfiguration) config: AppConfiguration) {
    super(Collection.connection_string(config, "template"));
  }

  resolve(template: Template, context: any) {
    return {
      "content-rendered": render(
        template.template,
        all([template.context, context])
      ),
      "content-type": template.mediatype,
    };
  }
}
