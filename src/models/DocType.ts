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
 * The type of document.
 * 
 * `DOCUMENT_TYPE_PAYSTUB`: A paystub.
 * 
 * `DOCUMENT_TYPE_BANK_STATEMENT`: A bank statement.
 * 
 * `DOCUMENT_TYPE_US_TAX_W2`: A W-2 wage and tax statement provided by a US employer reflecting wages earned by the employee.
 * 
 * `DOCUMENT_TYPE_US_MILITARY_ERAS`: An electronic Retirement Account Statement (eRAS) issued by the US military.
 * 
 * `DOCUMENT_TYPE_US_MILITARY_LES`: A Leave and Earnings Statement (LES) issued by the US military.
 * 
 * `DOCUMENT_TYPE_US_MILITARY_CLES`: A Civilian Leave and Earnings Statement (CLES) issued by the US military.
 * 
 * `DOCUMENT_TYPE_GIG`: Used to indicate that the income is related to gig work. Does not necessarily correspond to a specific document type.
 * 
 * `DOCUMENT_TYPE_NONE`: Used to indicate that there is no underlying document for the data.
 * 
 * `DOCUMENT_TYPE_PLAID_GENERATED_PAYSTUB_PDF`: Used to indicate that the PDF for the paystub was generated by Plaid.
 * 
 * `UNKNOWN`: Document type could not be determined.
 * @export
 */
export const DocType = {
    Unknown: 'UNKNOWN',
    DocumentTypePaystub: 'DOCUMENT_TYPE_PAYSTUB',
    DocumentTypeBankStatement: 'DOCUMENT_TYPE_BANK_STATEMENT',
    DocumentTypeUsTaxW2: 'DOCUMENT_TYPE_US_TAX_W2',
    DocumentTypeUsMilitaryEras: 'DOCUMENT_TYPE_US_MILITARY_ERAS',
    DocumentTypeUsMilitaryLes: 'DOCUMENT_TYPE_US_MILITARY_LES',
    DocumentTypeUsMilitaryCles: 'DOCUMENT_TYPE_US_MILITARY_CLES',
    DocumentTypeGig: 'DOCUMENT_TYPE_GIG',
    DocumentTypeNone: 'DOCUMENT_TYPE_NONE',
    DocumentTypeUsTax1099Misc: 'DOCUMENT_TYPE_US_TAX_1099_MISC',
    DocumentTypeUsTax1099K: 'DOCUMENT_TYPE_US_TAX_1099_K',
    DocumentTypePlaidGeneratedPaystubPdf: 'DOCUMENT_TYPE_PLAID_GENERATED_PAYSTUB_PDF'
} as const;
export type DocType = typeof DocType[keyof typeof DocType];


export function DocTypeFromJSON(json: any): DocType {
    return DocTypeFromJSONTyped(json, false);
}

export function DocTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocType {
    return json as DocType;
}

export function DocTypeToJSON(value?: DocType | null): any {
    return value as any;
}

