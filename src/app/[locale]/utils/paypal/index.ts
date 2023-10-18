// eslint-disable-next-line import/no-extraneous-dependencies
import checkoutNodeJssdk from '@paypal/checkout-server-sdk'

const configureEnvironment = function () {
const clientId = process.env.PAYPAL_CLIENT_ID || "abcd"
const clientSecret = process.env.PAYPAL_CLIENT_SECRET || "abcd"

return new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret)
}

function client () {
return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment())
}

export default client