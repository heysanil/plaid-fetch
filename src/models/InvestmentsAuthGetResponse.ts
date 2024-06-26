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
import type { AccountBase } from './AccountBase';
import {
    AccountBaseFromJSON,
    AccountBaseFromJSONTyped,
    AccountBaseToJSON,
} from './AccountBase';
import type { Holding } from './Holding';
import {
    HoldingFromJSON,
    HoldingFromJSONTyped,
    HoldingToJSON,
} from './Holding';
import type { InvestmentsAuthGetNumbers } from './InvestmentsAuthGetNumbers';
import {
    InvestmentsAuthGetNumbersFromJSON,
    InvestmentsAuthGetNumbersFromJSONTyped,
    InvestmentsAuthGetNumbersToJSON,
} from './InvestmentsAuthGetNumbers';
import type { InvestmentsAuthOwner } from './InvestmentsAuthOwner';
import {
    InvestmentsAuthOwnerFromJSON,
    InvestmentsAuthOwnerFromJSONTyped,
    InvestmentsAuthOwnerToJSON,
} from './InvestmentsAuthOwner';
import type { Item } from './Item';
import {
    ItemFromJSON,
    ItemFromJSONTyped,
    ItemToJSON,
} from './Item';
import type { Security } from './Security';
import {
    SecurityFromJSON,
    SecurityFromJSONTyped,
    SecurityToJSON,
} from './Security';

/**
 * InvestmentsAuthGetResponse defines the response schema for `/investments/auth/get`
 * @export
 * @interface InvestmentsAuthGetResponse
 */
export interface InvestmentsAuthGetResponse {
    [key: string]: any | any;
    /**
     * The accounts for which data is being retrieved
     * @type {Array<AccountBase>}
     * @memberof InvestmentsAuthGetResponse
     */
    accounts: Array<AccountBase>;
    /**
     * The holdings belonging to investment accounts associated with the Item. Details of the securities in the holdings are provided in the `securities` field. 
     * @type {Array<Holding>}
     * @memberof InvestmentsAuthGetResponse
     */
    holdings: Array<Holding>;
    /**
     * Objects describing the securities held in the accounts associated with the Item. 
     * @type {Array<Security>}
     * @memberof InvestmentsAuthGetResponse
     */
    securities: Array<Security>;
    /**
     * Information about the account owners for the accounts associated with the Item. 
     * @type {Array<InvestmentsAuthOwner>}
     * @memberof InvestmentsAuthGetResponse
     */
    owners: Array<InvestmentsAuthOwner>;
    /**
     * 
     * @type {InvestmentsAuthGetNumbers}
     * @memberof InvestmentsAuthGetResponse
     */
    numbers: InvestmentsAuthGetNumbers;
    /**
     * 
     * @type {Item}
     * @memberof InvestmentsAuthGetResponse
     */
    item: Item;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof InvestmentsAuthGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the InvestmentsAuthGetResponse interface.
 */
export function instanceOfInvestmentsAuthGetResponse(value: object): boolean {
    if (!('accounts' in value)) return false;
    if (!('holdings' in value)) return false;
    if (!('securities' in value)) return false;
    if (!('owners' in value)) return false;
    if (!('numbers' in value)) return false;
    if (!('item' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function InvestmentsAuthGetResponseFromJSON(json: any): InvestmentsAuthGetResponse {
    return InvestmentsAuthGetResponseFromJSONTyped(json, false);
}

export function InvestmentsAuthGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvestmentsAuthGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'accounts': ((json['accounts'] as Array<any>).map(AccountBaseFromJSON)),
        'holdings': ((json['holdings'] as Array<any>).map(HoldingFromJSON)),
        'securities': ((json['securities'] as Array<any>).map(SecurityFromJSON)),
        'owners': ((json['owners'] as Array<any>).map(InvestmentsAuthOwnerFromJSON)),
        'numbers': InvestmentsAuthGetNumbersFromJSON(json['numbers']),
        'item': ItemFromJSON(json['item']),
        'request_id': json['request_id'],
    };
}

export function InvestmentsAuthGetResponseToJSON(value?: InvestmentsAuthGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'accounts': ((value['accounts'] as Array<any>).map(AccountBaseToJSON)),
        'holdings': ((value['holdings'] as Array<any>).map(HoldingToJSON)),
        'securities': ((value['securities'] as Array<any>).map(SecurityToJSON)),
        'owners': ((value['owners'] as Array<any>).map(InvestmentsAuthOwnerToJSON)),
        'numbers': InvestmentsAuthGetNumbersToJSON(value['numbers']),
        'item': ItemToJSON(value['item']),
        'request_id': value['request_id'],
    };
}

