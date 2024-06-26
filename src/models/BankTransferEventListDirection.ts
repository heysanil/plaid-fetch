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
 * Indicates the direction of the transfer: `outbound`: for API-initiated transfers
 * `inbound`: for payments received by the FBO account.
 * @export
 */
export const BankTransferEventListDirection = {
    Inbound: 'inbound',
    Outbound: 'outbound',
    Null: 'null'
} as const;
export type BankTransferEventListDirection = typeof BankTransferEventListDirection[keyof typeof BankTransferEventListDirection];


export function BankTransferEventListDirectionFromJSON(json: any): BankTransferEventListDirection {
    return BankTransferEventListDirectionFromJSONTyped(json, false);
}

export function BankTransferEventListDirectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankTransferEventListDirection {
    return json as BankTransferEventListDirection;
}

export function BankTransferEventListDirectionToJSON(value?: BankTransferEventListDirection | null): any {
    return value as any;
}

