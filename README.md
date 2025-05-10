## Mural Pay Demo

# Requirements

-   1. Customer & account creation
-   2. Payout request creation
       -- need to list accounts to request payouts
       -- top id is payout
       -- needs to have money
-   3. Payout request execution
       -- need transfer API in header (transfer-api-key)
-   4. Viewing payout requests and their statuses for a given account
       -- simple POST
-   5. Integrates with one other public API of your choosing. The mural API already provides
       access to exchange rates/fees, so please choose something other than that!

# Resources:

- API docs: https://developers.muralpay.com/docs/getting-started
- NOTE: See Sandbox-specific info here for information such as how to fund your
  test accounts. Please be sure to use the Sandbox environment
  (https://api-staging.muralpay.com) and not the Production environment
  (https://api.muralpay.com).

- Platform docs to assist you in navigating our platform: https://docs.muralpay.com/en/

# Notes

- tanstack Query
- shadcn OR
- material ui
