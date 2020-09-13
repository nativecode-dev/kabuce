/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { Injectable } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { OrganizationLocationsService } from '../../../controllers/OrganizationLocations'

@Injectable()
export class OrganizationLocationsPostFormService {
  form: FormGroup
  constructor(private organizationLocationsService: OrganizationLocationsService) {
    this.form = new FormGroup({
      organization_id: new FormControl(undefined, [Validators.required]),
      body: new FormGroup(
        {
          organization_name: new FormControl(undefined, [
            Validators.pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
            Validators.required,
          ]),
          organization_title: new FormControl(undefined, [
            Validators.maxLength(256),
            Validators.minLength(8),
            Validators.required,
          ]),
        },
        [],
      ),
    })
  }

  submit(raw = false) {
    const data = raw ? this.form.getRawValue() : this.form.value
    return this.organizationLocationsService.organizationLocationsPost(data)
  }
}
