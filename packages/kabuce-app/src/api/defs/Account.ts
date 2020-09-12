/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import * as __model from '../model';

export interface Account {
  /** Account Reference can be used for any purpose. */
  account_reference: string;
  /** default: true */
  enabled?: boolean;
  /**
   * Account Owner's email.
   * format: email
   */
  owner_email: string;
  /** Account Owner's name. */
  owner_name: string;
  /** Account Owner's optional legal name. */
  owner_legal_name?: string;
  /** default:  */
  sync?: __model.AccountSync[];
}
