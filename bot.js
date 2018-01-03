"use strict";

const ccxt    = require ('ccxt')
const log     = require ('ololog')
const ansi    = require ('ansicolor').nice
const asTable = require ('as-table')

const exchange = new ccxt.gdax ({ enableRateLimit: true })
const repeat   = 1;

async function test (symbol) {

    for (let i = 0; i < repeat; i++) {
        let ticker = await exchange.fetchTicker (symbol)
        log.yellow (exchange.id.green, exchange.iso8601 (exchange.milliseconds ()), ticker['datetime'], symbol.green, ticker['last'])
    }

}

const concurrent = [
    test ('BTC/USD'),
    test ('ETH/BTC'),
    test ('ETH/USD')
]

Promise.all (concurrent)