/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'

import { of } from 'rxjs'

import { catchError, map, switchMap } from 'rxjs/operators'
import { OrganizationLocationsService } from '../../../../controllers/OrganizationLocations'
import * as actions from './actions'

@Injectable()
export class OrganizationLocationsAllEffects {
  @Effect()
  OrganizationLocationsAll = this.storeActions.pipe(
    ofType<actions.Start>(actions.Actions.START),
    switchMap((action: actions.Start) =>
      this.organizationlocationsService.organizationLocationsAll(action.payload).pipe(
        map((result) => new actions.Success(result)),
        catchError((error: HttpErrorResponse) => of(new actions.Error(error))),
      ),
    ),
  )

  constructor(private storeActions: Actions, private organizationlocationsService: OrganizationLocationsService) {}
}
