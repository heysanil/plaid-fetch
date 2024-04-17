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
import type { Products } from './Products';
import {
    ProductsFromJSON,
    ProductsFromJSONTyped,
    ProductsToJSON,
} from './Products';

/**
 * An optional object to filter `/institutions/get` results.
 * @export
 * @interface InstitutionsGetRequestOptions
 */
export interface InstitutionsGetRequestOptions {
    /**
     * Filter the Institutions based on which products they support. 
     * @type {Array<Products>}
     * @memberof InstitutionsGetRequestOptions
     */
    products?: Array<Products>;
    /**
     * Specify an array of routing numbers to filter institutions. The response will only return institutions that match all of the routing numbers in the array. Routing number records used for this matching are not comprehensive; failure to match a given routing number to an institution does not mean that the institution is unsupported by Plaid.
     * @type {Array<string>}
     * @memberof InstitutionsGetRequestOptions
     */
    routing_numbers?: Array<string>;
    /**
     * Limit results to institutions with or without OAuth login flows. Note that institutions will have `oauth` set to `true` if some Items associated with that institution are required to use OAuth flows; institutions in a state of migration to OAuth will have the `oauth` attribute set to `true`.
     * @type {boolean}
     * @memberof InstitutionsGetRequestOptions
     */
    oauth?: boolean;
    /**
     * When `true`, return the institution's homepage URL, logo and primary brand color.
     * 
     * Note that Plaid does not own any of the logos shared by the API, and that by accessing or using these logos, you agree that you are doing so at your own risk and will, if necessary, obtain all required permissions from the appropriate rights holders and adhere to any applicable usage guidelines. Plaid disclaims all express or implied warranties with respect to the logos.
     * @type {boolean}
     * @memberof InstitutionsGetRequestOptions
     */
    include_optional_metadata?: boolean;
    /**
     * When `true`, returns metadata related to the Auth product indicating which auth methods are supported.
     * @type {boolean}
     * @memberof InstitutionsGetRequestOptions
     */
    include_auth_metadata?: boolean;
    /**
     * When `true`, returns metadata related to the Payment Initiation product indicating which payment configurations are supported.
     * @type {boolean}
     * @memberof InstitutionsGetRequestOptions
     */
    include_payment_initiation_metadata?: boolean;
}

/**
 * Check if a given object implements the InstitutionsGetRequestOptions interface.
 */
export function instanceOfInstitutionsGetRequestOptions(value: object): boolean {
    return true;
}

export function InstitutionsGetRequestOptionsFromJSON(json: any): InstitutionsGetRequestOptions {
    return InstitutionsGetRequestOptionsFromJSONTyped(json, false);
}

export function InstitutionsGetRequestOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstitutionsGetRequestOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'products': json['products'] == null ? undefined : ((json['products'] as Array<any>).map(ProductsFromJSON)),
        'routing_numbers': json['routing_numbers'] == null ? undefined : json['routing_numbers'],
        'oauth': json['oauth'] == null ? undefined : json['oauth'],
        'include_optional_metadata': json['include_optional_metadata'] == null ? undefined : json['include_optional_metadata'],
        'include_auth_metadata': json['include_auth_metadata'] == null ? undefined : json['include_auth_metadata'],
        'include_payment_initiation_metadata': json['include_payment_initiation_metadata'] == null ? undefined : json['include_payment_initiation_metadata'],
    };
}

export function InstitutionsGetRequestOptionsToJSON(value?: InstitutionsGetRequestOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'products': value['products'] == null ? undefined : ((value['products'] as Array<any>).map(ProductsToJSON)),
        'routing_numbers': value['routing_numbers'],
        'oauth': value['oauth'],
        'include_optional_metadata': value['include_optional_metadata'],
        'include_auth_metadata': value['include_auth_metadata'],
        'include_payment_initiation_metadata': value['include_payment_initiation_metadata'],
    };
}
