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
export class OrganizationTemplatesPutFormService {
  form: FormGroup
  constructor(private organizationTemplatesService: OrganizationTemplatesService) {
    this.form = new FormGroup({
      organization_id: new FormControl(undefined, [Validators.required]),
      template_id: new FormControl(undefined, [Validators.required]),
      body: new FormGroup({}, []),
    })
  }

  submit(raw = false) {
    const data = raw ? this.form.getRawValue() : this.form.value
    return this.organizationTemplatesService.organizationTemplatesPut(data)
  }
}
