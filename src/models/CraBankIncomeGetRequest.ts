/* tslint:disable */
/* eslint-disable */
/**
 * The Plaid API
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2020-09-14_1.503.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * CraBankIncomeGetRequest defines the request schema for `/cra/bank_income/get`.
 * @export
 * @interface CraBankIncomeGetRequest
 */
export interface CraBankIncomeGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof CraBankIncomeGetRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof CraBankIncomeGetRequest
     */
    secret?: string;
    /**
     * The user token associated with the User data is being requested for.
     * @type {string}
     * @memberof CraBankIncomeGetRequest
     */
    user_token?: string;
}

/**
 * Check if a given object implements the CraBankIncomeGetRequest interface.
 */
export function instanceOfCraBankIncomeGetRequest(value: object): boolean {
    return true;
}

export function CraBankIncomeGetRequestFromJSON(json: any): CraBankIncomeGetRequest {
    return CraBankIncomeGetRequestFromJSONTyped(json, false);
}

export function CraBankIncomeGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CraBankIncomeGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'user_token': json['user_token'] == null ? undefined : json['user_token'],
    };
}

export function CraBankIncomeGetRequestToJSON(value?: CraBankIncomeGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'user_token': value['user_token'],
    };
}

