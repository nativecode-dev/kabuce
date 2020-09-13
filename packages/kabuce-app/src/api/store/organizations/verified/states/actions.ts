/* tslint:disable:max-line-length max-classes-per-file */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { HttpErrorResponse } from '@angular/common/http'
import { Action } from '@ngrx/store'
import { VerifiedParams } from '../../../../controllers/Organizations'

export enum Actions {
  START = '[Organizations verified] Start',
  SUCCESS = '[Organizations verified] Success',
  ERROR = '[Organizations verified] Error',
}

export class Start implements Action {
  readonly type = Actions.START
  constructor(public payload: VerifiedParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS
  constructor(public payload: boolean) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR
  constructor(public payload: HttpErrorResponse) {}
}

export type VerifiedAction = Start | Success | Error
