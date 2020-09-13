/* tslint:disable:max-line-length max-classes-per-file */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { HttpErrorResponse } from '@angular/common/http'
import { Action } from '@ngrx/store'
import { OrganizationsPutParams } from '../../../../controllers/Organizations'
import * as __model from '../../../../model'

export enum Actions {
  START = '[Organizations organizationsPut] Start',
  SUCCESS = '[Organizations organizationsPut] Success',
  ERROR = '[Organizations organizationsPut] Error',
}

export class Start implements Action {
  readonly type = Actions.START
  constructor(public payload: OrganizationsPutParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS
  constructor(public payload: __model.Organization) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR
  constructor(public payload: HttpErrorResponse) {}
}

export type OrganizationsPutAction = Start | Success | Error
