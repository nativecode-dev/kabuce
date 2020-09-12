/* tslint:disable:max-line-length max-classes-per-file */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {OrganizationLocationsPutParams} from '../../../../controllers/OrganizationLocations';
import * as __model from '../../../../model';

export enum Actions {
  START = '[OrganizationLocations organizationLocationsPut] Start',
  SUCCESS = '[OrganizationLocations organizationLocationsPut] Success',
  ERROR = '[OrganizationLocations organizationLocationsPut] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: OrganizationLocationsPutParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.ModelKey) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type OrganizationLocationsPutAction = Start | Success | Error;
