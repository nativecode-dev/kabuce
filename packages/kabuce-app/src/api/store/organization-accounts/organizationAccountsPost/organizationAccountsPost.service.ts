/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormArrayExtended} from '../../../common/formArrayExtended';
import {OrganizationAccountsService} from '../../../controllers/OrganizationAccounts';

@Injectable()
export class OrganizationAccountsPostFormService {
  form: FormGroup;
  constructor(
    private organizationAccountsService: OrganizationAccountsService,
  ) {
    this.form = new FormGroup({
      organization_id: new FormControl(undefined, [Validators.required]),
      body: new FormGroup({
        account_reference: new FormControl(undefined, [Validators.maxLength(128), Validators.minLength(8), Validators.required]),
        enabled: new FormControl(true, []),
        owner_email: new FormControl(undefined, [Validators.email, Validators.required]),
        owner_name: new FormControl(undefined, [Validators.maxLength(128), Validators.minLength(8), Validators.required]),
        owner_legal_name: new FormControl(undefined, [Validators.maxLength(128), Validators.minLength(8)]),
        sync: new FormArrayExtended(() => (
          new FormGroup({
            account_sync_handler: new FormControl(undefined, [Validators.maxLength(256), Validators.required]),
          }, [])), [], []),
      }, []),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.organizationAccountsService.organizationAccountsPost(data);
  }
}
