/* tslint:disable:max-line-length max-classes-per-file */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { HttpErrorResponse } from '@angular/common/http'
import { Action } from '@ngrx/store'
import { OrganizationTemplatesAllParams } from '../../../../controllers/OrganizationTemplates'
import * as __model from '../../../../model'

export enum Actions {
  START = '[OrganizationTemplates organizationTemplatesAll] Start',
  SUCCESS = '[OrganizationTemplates organizationTemplatesAll] Success',
  ERROR = '[OrganizationTemplates organizationTemplatesAll] Error',
}

export class Start implements Action {
  readonly type = Actions.START
  constructor(public payload: OrganizationTemplatesAllParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS
  constructor(public payload: __model.Template[]) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR
  constructor(public payload: HttpErrorResponse) {}
}

export type OrganizationTemplatesAllAction = Start | Success | Error
