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
import type { OptionContract } from './OptionContract';
import {
    OptionContractFromJSON,
    OptionContractFromJSONTyped,
    OptionContractToJSON,
} from './OptionContract';

/**
 * Contains details about a security
 * @export
 * @interface Security
 */
export interface Security {
    [key: string]: any | any;
    /**
     * A unique, Plaid-specific identifier for the security, used to associate securities with holdings. Like all Plaid identifiers, the `security_id` is case sensitive. The `security_id` may change if inherent details of the security change due to a corporate action, for example, in the event of a ticker symbol change or CUSIP change.
     * @type {string}
     * @memberof Security
     */
    security_id: string;
    /**
     * 12-character ISIN, a globally unique securities identifier. A verified CUSIP Global Services license is required to receive this data. This field will be null by default for new customers, and null for existing customers starting March 12, 2024. If you would like access to this field, please start the verification process [here](https://docs.google.com/forms/d/e/1FAIpQLSd9asHEYEfmf8fxJTHZTAfAzW4dugsnSu-HS2J51f1mxwd6Sw/viewform).
     * @type {string}
     * @memberof Security
     */
    isin: string | null;
    /**
     * 9-character CUSIP, an identifier assigned to North American securities. A verified CUSIP Global Services license is required to receive this data. This field will be null by default for new customers, and null for existing customers starting March 12, 2024. If you would like access to this field, please start the verification process [here](https://docs.google.com/forms/d/e/1FAIpQLSd9asHEYEfmf8fxJTHZTAfAzW4dugsnSu-HS2J51f1mxwd6Sw/viewform).
     * @type {string}
     * @memberof Security
     */
    cusip: string | null;
    /**
     * 7-character SEDOL, an identifier assigned to securities in the UK.
     * @type {string}
     * @memberof Security
     */
    sedol: string | null;
    /**
     * An identifier given to the security by the institution
     * @type {string}
     * @memberof Security
     */
    institution_security_id: string | null;
    /**
     * If `institution_security_id` is present, this field indicates the Plaid `institution_id` of the institution to whom the identifier belongs.
     * @type {string}
     * @memberof Security
     */
    institution_id: string | null;
    /**
     * In certain cases, Plaid will provide the ID of another security whose performance resembles this security, typically when the original security has low volume, or when a private security can be modeled with a publicly traded security.
     * @type {string}
     * @memberof Security
     */
    proxy_security_id: string | null;
    /**
     * A descriptive name for the security, suitable for display.
     * @type {string}
     * @memberof Security
     */
    name: string | null;
    /**
     * The security’s trading symbol for publicly traded securities, and otherwise a short identifier if available.
     * @type {string}
     * @memberof Security
     */
    ticker_symbol: string | null;
    /**
     * Indicates that a security is a highly liquid asset and can be treated like cash.
     * @type {boolean}
     * @memberof Security
     */
    is_cash_equivalent: boolean | null;
    /**
     * The security type of the holding.
     * 
     * In rare instances, a null value is returned when institutional data is insufficient to determine the security type.
     * 
     * Valid security types are:
     * 
     * `cash`: Cash, currency, and money market funds
     * 
     * `cryptocurrency`: Digital or virtual currencies
     * 
     * `derivative`: Options, warrants, and other derivative instruments
     * 
     * `equity`: Domestic and foreign equities
     * 
     * `etf`: Multi-asset exchange-traded investment funds
     * 
     * `fixed income`: Bonds and certificates of deposit (CDs)
     * 
     * `loan`: Loans and loan receivables
     * 
     * `mutual fund`: Open- and closed-end vehicles pooling funds of multiple investors
     * 
     * `other`: Unknown or other investment types
     * @type {string}
     * @memberof Security
     */
    type: string | null;
    /**
     * Price of the security at the close of the previous trading session. Null for non-public securities.
     * 
     * If the security is a foreign currency this field will be updated daily and will be priced in USD.
     * 
     * If the security is a cryptocurrency, this field will be updated multiple times a day. As crypto prices can fluctuate quickly and data may become stale sooner than other asset classes, refer to `update_datetime` with the time when the price was last updated.
     * 
     * @type {number}
     * @memberof Security
     */
    close_price: number | null;
    /**
     * Date for which `close_price` is accurate. Always `null` if `close_price` is `null`.
     * @type {Date}
     * @memberof Security
     */
    close_price_as_of: Date | null;
    /**
     * Date and time at which `close_price` is accurate, in ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ). Always `null` if `close_price` is `null`.
     * @type {Date}
     * @memberof Security
     */
    update_datetime?: Date;
    /**
     * The ISO-4217 currency code of the price given. Always `null` if `unofficial_currency_code` is non-`null`.
     * @type {string}
     * @memberof Security
     */
    iso_currency_code: string | null;
    /**
     * The unofficial currency code associated with the security. Always `null` if `iso_currency_code` is non-`null`. Unofficial currency codes are used for currencies that do not have official ISO currency codes, such as cryptocurrencies and the currencies of certain countries.
     * 
     * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a full listing of supported `iso_currency_code`s.
     * @type {string}
     * @memberof Security
     */
    unofficial_currency_code: string | null;
    /**
     * The ISO-10383 Market Identifier Code of the exchange or market in which the security is being traded.
     * @type {string}
     * @memberof Security
     */
    market_identifier_code: string | null;
    /**
     * 
     * @type {OptionContract}
     * @memberof Security
     */
    option_contract: OptionContract | null;
}

/**
 * Check if a given object implements the Security interface.
 */
export function instanceOfSecurity(value: object): boolean {
    if (!('security_id' in value)) return false;
    if (!('isin' in value)) return false;
    if (!('cusip' in value)) return false;
    if (!('sedol' in value)) return false;
    if (!('institution_security_id' in value)) return false;
    if (!('institution_id' in value)) return false;
    if (!('proxy_security_id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('ticker_symbol' in value)) return false;
    if (!('is_cash_equivalent' in value)) return false;
    if (!('type' in value)) return false;
    if (!('close_price' in value)) return false;
    if (!('close_price_as_of' in value)) return false;
    if (!('iso_currency_code' in value)) return false;
    if (!('unofficial_currency_code' in value)) return false;
    if (!('market_identifier_code' in value)) return false;
    if (!('option_contract' in value)) return false;
    return true;
}

export function SecurityFromJSON(json: any): Security {
    return SecurityFromJSONTyped(json, false);
}

export function SecurityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Security {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'security_id': json['security_id'],
        'isin': json['isin'],
        'cusip': json['cusip'],
        'sedol': json['sedol'],
        'institution_security_id': json['institution_security_id'],
        'institution_id': json['institution_id'],
        'proxy_security_id': json['proxy_security_id'],
        'name': json['name'],
        'ticker_symbol': json['ticker_symbol'],
        'is_cash_equivalent': json['is_cash_equivalent'],
        'type': json['type'],
        'close_price': json['close_price'],
        'close_price_as_of': (json['close_price_as_of'] == null ? null : new Date(json['close_price_as_of'])),
        'update_datetime': json['update_datetime'] == null ? undefined : (new Date(json['update_datetime'])),
        'iso_currency_code': json['iso_currency_code'],
        'unofficial_currency_code': json['unofficial_currency_code'],
        'market_identifier_code': json['market_identifier_code'],
        'option_contract': OptionContractFromJSON(json['option_contract']),
    };
}

export function SecurityToJSON(value?: Security | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'security_id': value['security_id'],
        'isin': value['isin'],
        'cusip': value['cusip'],
        'sedol': value['sedol'],
        'institution_security_id': value['institution_security_id'],
        'institution_id': value['institution_id'],
        'proxy_security_id': value['proxy_security_id'],
        'name': value['name'],
        'ticker_symbol': value['ticker_symbol'],
        'is_cash_equivalent': value['is_cash_equivalent'],
        'type': value['type'],
        'close_price': value['close_price'],
        'close_price_as_of': (value['close_price_as_of'] == null ? null : (value['close_price_as_of'] as any).toISOString().substring(0,10)),
        'update_datetime': value['update_datetime'] == null ? undefined : ((value['update_datetime'] as any).toISOString()),
        'iso_currency_code': value['iso_currency_code'],
        'unofficial_currency_code': value['unofficial_currency_code'],
        'market_identifier_code': value['market_identifier_code'],
        'option_contract': OptionContractToJSON(value['option_contract']),
    };
}

