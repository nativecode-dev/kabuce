/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { Injectable } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { OrganizationTemplatesService } from '../../../controllers/OrganizationTemplates'

@Injectable()
export class OrganizationTemplatesPostFormService {
  form: FormGroup
  constructor(private organizationTemplatesService: OrganizationTemplatesService) {
    this.form = new FormGroup({
      organization_id: new FormControl(undefined, [Validators.required]),
      body: new FormGroup(
        {
          context: new FormGroup({}, [Validators.required]),
          mediatype: new FormControl('text/html', [
            Validators.pattern(
              /(application|audio|font|example|image|message|model|multipart|text|video|x-(?:[0-9A-Za-z!#$%&'*+.^_`|~-]+))\/([0-9A-Za-z!#$%&'*+.^_`|~-]+)/,
            ),
            Validators.required,
          ]),
          name: new FormControl(undefined, [Validators.maxLength(256), Validators.minLength(8), Validators.required]),
          organization_id: new FormControl(undefined, [
            Validators.pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
            Validators.required,
          ]),
          slug: new FormControl(undefined, [Validators.pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/), Validators.required]),
          template: new FormControl(undefined, [Validators.required]),
        },
        [],
      ),
    })
  }

  submit(raw = false) {
    const data = raw ? this.form.getRawValue() : this.form.value
    return this.organizationTemplatesService.organizationTemplatesPost(data)
  }
}
