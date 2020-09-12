/* tslint:disable:max-line-length max-classes-per-file */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {OrganizationAccountsGetParams} from '../../../../controllers/OrganizationAccounts';

export enum Actions {
  START = '[OrganizationAccounts organizationAccountsGet] Start',
  SUCCESS = '[OrganizationAccounts organizationAccountsGet] Success',
  ERROR = '[OrganizationAccounts organizationAccountsGet] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: OrganizationAccountsGetParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: void) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type OrganizationAccountsGetAction = Start | Success | Error;
