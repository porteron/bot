"use strict";

const ccxt      = require ('ccxt')
const asTable   = require ('as-table')
const log       = require ('ololog').configure ({ locate: false })

require ('ansicolor').nice;

(async function test () {

    const exchange = new ccxt.bitfinex ()
    const orders = await exchange.fetchOrderBook ('ETH/USD', {
        'limit_bids': 8, // max = 50
        'limit_asks': 8, // may be 0 in which case the array is empty
        'group': 1, // 1 = orders are grouped by price, 0 = orders are separate
    })

    log.blue (orders)
}) ()