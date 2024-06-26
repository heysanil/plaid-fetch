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
import type { PartnerEndCustomerFlowdownStatus } from './PartnerEndCustomerFlowdownStatus';
import {
    PartnerEndCustomerFlowdownStatusFromJSON,
    PartnerEndCustomerFlowdownStatusFromJSONTyped,
    PartnerEndCustomerFlowdownStatusToJSON,
} from './PartnerEndCustomerFlowdownStatus';
import type { PartnerEndCustomerOAuthInstitution } from './PartnerEndCustomerOAuthInstitution';
import {
    PartnerEndCustomerOAuthInstitutionFromJSON,
    PartnerEndCustomerOAuthInstitutionFromJSONTyped,
    PartnerEndCustomerOAuthInstitutionToJSON,
} from './PartnerEndCustomerOAuthInstitution';
import type { PartnerEndCustomerQuestionnaireStatus } from './PartnerEndCustomerQuestionnaireStatus';
import {
    PartnerEndCustomerQuestionnaireStatusFromJSON,
    PartnerEndCustomerQuestionnaireStatusFromJSONTyped,
    PartnerEndCustomerQuestionnaireStatusToJSON,
} from './PartnerEndCustomerQuestionnaireStatus';

/**
 * Response schema for `/partner/customer/oauth_institutions/get`.
 * @export
 * @interface PartnerCustomerOAuthInstitutionsGetResponse
 */
export interface PartnerCustomerOAuthInstitutionsGetResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {PartnerEndCustomerFlowdownStatus}
     * @memberof PartnerCustomerOAuthInstitutionsGetResponse
     */
    flowdown_status?: PartnerEndCustomerFlowdownStatus;
    /**
     * 
     * @type {PartnerEndCustomerQuestionnaireStatus}
     * @memberof PartnerCustomerOAuthInstitutionsGetResponse
     */
    questionnaire_status?: PartnerEndCustomerQuestionnaireStatus;
    /**
     * The OAuth institutions with which the end customer's application is being registered.
     * @type {Array<PartnerEndCustomerOAuthInstitution>}
     * @memberof PartnerCustomerOAuthInstitutionsGetResponse
     */
    institutions?: Array<PartnerEndCustomerOAuthInstitution>;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof PartnerCustomerOAuthInstitutionsGetResponse
     */
    request_id?: string;
}

/**
 * Check if a given object implements the PartnerCustomerOAuthInstitutionsGetResponse interface.
 */
export function instanceOfPartnerCustomerOAuthInstitutionsGetResponse(value: object): boolean {
    return true;
}

export function PartnerCustomerOAuthInstitutionsGetResponseFromJSON(json: any): PartnerCustomerOAuthInstitutionsGetResponse {
    return PartnerCustomerOAuthInstitutionsGetResponseFromJSONTyped(json, false);
}

export function PartnerCustomerOAuthInstitutionsGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerCustomerOAuthInstitutionsGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'flowdown_status': json['flowdown_status'] == null ? undefined : PartnerEndCustomerFlowdownStatusFromJSON(json['flowdown_status']),
        'questionnaire_status': json['questionnaire_status'] == null ? undefined : PartnerEndCustomerQuestionnaireStatusFromJSON(json['questionnaire_status']),
        'institutions': json['institutions'] == null ? undefined : ((json['institutions'] as Array<any>).map(PartnerEndCustomerOAuthInstitutionFromJSON)),
        'request_id': json['request_id'] == null ? undefined : json['request_id'],
    };
}

export function PartnerCustomerOAuthInstitutionsGetResponseToJSON(value?: PartnerCustomerOAuthInstitutionsGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'flowdown_status': PartnerEndCustomerFlowdownStatusToJSON(value['flowdown_status']),
        'questionnaire_status': PartnerEndCustomerQuestionnaireStatusToJSON(value['questionnaire_status']),
        'institutions': value['institutions'] == null ? undefined : ((value['institutions'] as Array<any>).map(PartnerEndCustomerOAuthInstitutionToJSON)),
        'request_id': value['request_id'],
    };
}

