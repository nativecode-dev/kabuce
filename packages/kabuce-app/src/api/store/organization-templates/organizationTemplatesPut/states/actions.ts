/* tslint:disable:max-line-length max-classes-per-file */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {OrganizationTemplatesPutParams} from '../../../../controllers/OrganizationTemplates';

export enum Actions {
  START = '[OrganizationTemplates organizationTemplatesPut] Start',
  SUCCESS = '[OrganizationTemplates organizationTemplatesPut] Success',
  ERROR = '[OrganizationTemplates organizationTemplatesPut] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: OrganizationTemplatesPutParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: string) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type OrganizationTemplatesPutAction = Start | Success | Error;
