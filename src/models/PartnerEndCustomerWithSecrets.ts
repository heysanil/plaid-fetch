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
import type { PartnerEndCustomerSecrets } from './PartnerEndCustomerSecrets';
import {
    PartnerEndCustomerSecretsFromJSON,
    PartnerEndCustomerSecretsFromJSONTyped,
    PartnerEndCustomerSecretsToJSON,
} from './PartnerEndCustomerSecrets';
import type { PartnerEndCustomerStatus } from './PartnerEndCustomerStatus';
import {
    PartnerEndCustomerStatusFromJSON,
    PartnerEndCustomerStatusFromJSONTyped,
    PartnerEndCustomerStatusToJSON,
} from './PartnerEndCustomerStatus';

/**
 * The details for the newly created end customer, including secrets for non-Production environments.
 * @export
 * @interface PartnerEndCustomerWithSecrets
 */
export interface PartnerEndCustomerWithSecrets {
    [key: string]: any | any;
    /**
     * The `client_id` of the end customer.
     * @type {string}
     * @memberof PartnerEndCustomerWithSecrets
     */
    client_id?: string;
    /**
     * The company name associated with the end customer.
     * @type {string}
     * @memberof PartnerEndCustomerWithSecrets
     */
    company_name?: string;
    /**
     * 
     * @type {PartnerEndCustomerStatus}
     * @memberof PartnerEndCustomerWithSecrets
     */
    status?: PartnerEndCustomerStatus;
    /**
     * 
     * @type {PartnerEndCustomerSecrets}
     * @memberof PartnerEndCustomerWithSecrets
     */
    secrets?: PartnerEndCustomerSecrets;
}

/**
 * Check if a given object implements the PartnerEndCustomerWithSecrets interface.
 */
export function instanceOfPartnerEndCustomerWithSecrets(value: object): boolean {
    return true;
}

export function PartnerEndCustomerWithSecretsFromJSON(json: any): PartnerEndCustomerWithSecrets {
    return PartnerEndCustomerWithSecretsFromJSONTyped(json, false);
}

export function PartnerEndCustomerWithSecretsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerEndCustomerWithSecrets {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'company_name': json['company_name'] == null ? undefined : json['company_name'],
        'status': json['status'] == null ? undefined : PartnerEndCustomerStatusFromJSON(json['status']),
        'secrets': json['secrets'] == null ? undefined : PartnerEndCustomerSecretsFromJSON(json['secrets']),
    };
}

export function PartnerEndCustomerWithSecretsToJSON(value?: PartnerEndCustomerWithSecrets | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'client_id': value['client_id'],
        'company_name': value['company_name'],
        'status': PartnerEndCustomerStatusToJSON(value['status']),
        'secrets': PartnerEndCustomerSecretsToJSON(value['secrets']),
    };
}
