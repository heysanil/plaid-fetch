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


/**
 * The network or rails used for the transfer. Defaults to `same-day-ach`.
 * 
 * For transfers submitted as `ach`, the next-day cutoff is 5:30 PM Eastern Time.
 * 
 * For transfers submitted as `same-day-ach`, the same-day cutoff is 3:30 PM Eastern Time. If the transfer is submitted after this cutoff but before the next-day cutoff, it will be sent over next-day rails and will not incur same-day charges; this will apply to both legs of the transfer if applicable.
 * @export
 */
export const TransferIntentCreateNetwork = {
    Ach: 'ach',
    SameDayAch: 'same-day-ach'
} as const;
export type TransferIntentCreateNetwork = typeof TransferIntentCreateNetwork[keyof typeof TransferIntentCreateNetwork];


export function TransferIntentCreateNetworkFromJSON(json: any): TransferIntentCreateNetwork {
    return TransferIntentCreateNetworkFromJSONTyped(json, false);
}

export function TransferIntentCreateNetworkFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferIntentCreateNetwork {
    return json as TransferIntentCreateNetwork;
}

export function TransferIntentCreateNetworkToJSON(value?: TransferIntentCreateNetwork | null): any {
    return value as any;
}

