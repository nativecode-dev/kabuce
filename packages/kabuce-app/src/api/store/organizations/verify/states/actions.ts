/* tslint:disable:max-line-length max-classes-per-file */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { HttpErrorResponse } from '@angular/common/http'
import { Action } from '@ngrx/store'
import { VerifyParams } from '../../../../controllers/Organizations'
import * as __model from '../../../../model'

export enum Actions {
  START = '[Organizations verify] Start',
  SUCCESS = '[Organizations verify] Success',
  ERROR = '[Organizations verify] Error',
}

export class Start implements Action {
  readonly type = Actions.START
  constructor(public payload: VerifyParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS
  constructor(public payload: __model.Organizations) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR
  constructor(public payload: HttpErrorResponse) {}
}

export type VerifyAction = Start | Success | Error
