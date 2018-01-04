
"use strict";

const ccxt       = require ('ccxt')
const asciichart = require ('asciichart')
const asTable    = require ('as-table')
const log        = require ('ololog').configure ({ locate: false })

require ('ansicolor').nice;

//-----------------------------------------------------------------------------

(async function main () {

    const index = 4 // [ timestamp, open, high, low, close, volume ]


    const ohlcv = await new ccxt.binance ().fetchOHLCV ('BTC/USDT', '1m')
    const lastPrice = ohlcv[ohlcv.length - 1][index] // closing price
    const series = ohlcv.slice (-80).map (x => x[index])         // closing price
    const bitcoinRate = ('₿ = $' + lastPrice).green
    const chart = asciichart.plot (series, { height: 15, padding: '            ' })
    log.yellow ("\n" + "  _________________________Binance BTC/USD________________________")

    log.green ("\n" + chart, bitcoinRate, "\n")

    const ohlcv2 = await new ccxt.bittrex ().fetchOHLCV ('ETH/USDT', '1m')
    const lastPrice2 = ohlcv2[ohlcv2.length - 1][index] // closing price
    const series2 = ohlcv2.slice (-80).map (x => x[index])         // closing price
    const bitcoinRate2 = ('₿ = $' + lastPrice2).green
    const chart2 = asciichart.plot (series2, { height: 15, padding: '            ' })
    log.yellow ("  _________________________Bittrex ETH/USD________________________")
    log.red ("\n" + chart2, bitcoinRate2, "\n")

    const ohlcv3 = await new ccxt.bittrex ().fetchOHLCV ('ADT/BTC', '1d')
    const lastPrice3 = ohlcv3[ohlcv3.length - 1][index] // closing price
    const series3 = ohlcv3.slice (-80).map (x => x[index])         // closing price
    const bitcoinRate3 = ('₿ = $' + lastPrice3).green
    const chart3 = asciichart.plot (series3, { height: 15, padding: '            ' })
    log.yellow ("  _________________________Bittrex ADT/USD________________________")
    log.green ("\n" + chart3, bitcoinRate3, "\n")

})()