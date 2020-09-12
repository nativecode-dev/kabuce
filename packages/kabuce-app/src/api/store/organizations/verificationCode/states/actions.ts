/* tslint:disable:max-line-length max-classes-per-file */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {VerificationCodeParams} from '../../../../controllers/Organizations';

export enum Actions {
  START = '[Organizations verificationCode] Start',
  SUCCESS = '[Organizations verificationCode] Success',
  ERROR = '[Organizations verificationCode] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: VerificationCodeParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: string) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type VerificationCodeAction = Start | Success | Error;
