/* tslint:disable:max-line-length max-classes-per-file */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {OrganizationAccountsPostParams} from '../../../../controllers/OrganizationAccounts';
import * as __model from '../../../../model';

export enum Actions {
  START = '[OrganizationAccounts organizationAccountsPost] Start',
  SUCCESS = '[OrganizationAccounts organizationAccountsPost] Success',
  ERROR = '[OrganizationAccounts organizationAccountsPost] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: OrganizationAccountsPostParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.ModelKey) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type OrganizationAccountsPostAction = Start | Success | Error;
