/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrganizationLocationsService} from '../../../controllers/OrganizationLocations';

@Injectable()
export class OrganizationLocationsAllFormService {
  form: FormGroup;
  constructor(
    private organizationLocationsService: OrganizationLocationsService,
  ) {
    this.form = new FormGroup({
      organization_id: new FormControl(undefined, [Validators.required]),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.organizationLocationsService.organizationLocationsAll(data);
  }
}
