## plaid-fetch

This is a simple wrapper around the Plaid API that uses `fetch` to make requests for compatibility in edge environments that don't support Plaid's official Node SDK, which requires Axios support.

Code is generated using Plaid's OpenAPI spec with `@openapitools/openapi-generator-cli` with the `typescript-fetch` generator. This allows similar usage to the official Plaid Node SDK, which is generated using the same package.

**This is an unofficial, community-maintained library.** It is not maintained by Plaid, and has not been extensively tested, so use at your own risk and please report or contribute if you find any issues.

### Getting started

First, you'll need to create a Plaid account and get your API keys. You can do that [here](https://plaid.com/).

Install the package:

```sh
npm install plaid-fetch
# or
yarn add plaid-fetch
# or
pnpm add plaid-fetch
```

Then, initialize a client:

```ts
import { Configuration, PlaidApi } from 'plaid-fetch';

const configuration = new Configuration({
    basePath: 'https://sandbox.plaid.com',
    headers: {
        'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
        'PLAID-SECRET': process.env.PLAID_SECRET,
    },
})

const plaid = new PlaidApi(configuration);
```

You can now use this client to make requests similar to the official Plaid SDK:

```ts
const response = await plaid.transactionsEnrich({
    account_type: "credit",
    transactions: [{
        id: "abc123",
        description: "SQ *COACHELLA VALLEY M Royal Oak MI US 48067",
        amount: 26.10,
        direction: 'OUTFLOW',
        mcc: "5814",
        date_posted: new Date('2024-04-14'),
        iso_currency_code: "USD",
        location: { country: "US", region: "MI", city: "Royal Oak", postal_code: "48067" }
    }]
});

const enrichedTransactions = response.enriched_transactions;
```

### Differences versus the official SDK

* Configuring the client is slightly different, since the official SDK uses Axios and this one uses `fetch`. You need to pass the `basePath` and `headers` to the `Configuration` constructor (see above).
* Responses are returned directly, so you don't need to access the `data` property. For example, `response.data.enriched_transactions` becomes `response.enriched_transactions`. This behavior may change in the future to match the official SDK more closely; if so, it will be released as a major version bump.

### Development

When a new Plaid API version is released, the wrapper can be updated by running the following command:

```sh
pnpm generate
```

TODO: Set up changesets and automated releases.
