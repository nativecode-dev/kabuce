/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { Injectable } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { FormArrayExtended } from '../../../common/formArrayExtended'
import { OrganizationsService } from '../../../controllers/Organizations'

@Injectable()
export class OrganizationsPostFormService {
  form: FormGroup
  constructor(private organizationsService: OrganizationsService) {
    this.form = new FormGroup({
      body: new FormGroup(
        {
          domain: new FormControl(undefined, [
            Validators.pattern(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/),
            Validators.required,
          ]),
          email: new FormControl(undefined, [Validators.email, Validators.required]),
          organization_name: new FormControl(undefined, [
            Validators.pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
            Validators.required,
          ]),
          organization_title: new FormControl(undefined, [
            Validators.maxLength(256),
            Validators.minLength(8),
            Validators.required,
          ]),
          locations: new FormArrayExtended(
            () =>
              new FormGroup(
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
            [],
            [],
          ),
          verification_code: new FormControl(undefined, []),
          password: new FormControl(undefined, [
            Validators.maxLength(4096),
            Validators.minLength(24),
            Validators.required,
          ]),
        },
        [],
      ),
    })
  }

  submit(raw = false) {
    const data = raw ? this.form.getRawValue() : this.form.value
    return this.organizationsService.organizationsPost(data)
  }
}
