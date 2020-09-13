/* tslint:disable:max-line-length max-classes-per-file */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { HttpErrorResponse } from '@angular/common/http'
import { Action } from '@ngrx/store'
import * as __model from '../../../../model'

export enum Actions {
  START = '[Organizations organizationsAll] Start',
  SUCCESS = '[Organizations organizationsAll] Success',
  ERROR = '[Organizations organizationsAll] Error',
}

export class Start implements Action {
  readonly type = Actions.START
  constructor() {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS
  constructor(public payload: __model.Organization[]) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR
  constructor(public payload: HttpErrorResponse) {}
}

export type OrganizationsAllAction = Start | Success | Error
