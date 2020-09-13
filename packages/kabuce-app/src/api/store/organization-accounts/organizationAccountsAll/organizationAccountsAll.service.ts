/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { Injectable } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { OrganizationAccountsService } from '../../../controllers/OrganizationAccounts'

@Injectable()
export class OrganizationAccountsAllFormService {
  form: FormGroup
  constructor(private organizationAccountsService: OrganizationAccountsService) {
    this.form = new FormGroup({
      organization_id: new FormControl(undefined, [Validators.required]),
    })
  }

  submit(raw = false) {
    const data = raw ? this.form.getRawValue() : this.form.value
    return this.organizationAccountsService.organizationAccountsAll(data)
  }
}
