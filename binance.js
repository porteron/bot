const ccxt       = require ('ccxt')
const asciichart = require ('asciichart')
const asTable    = require ('as-table')
const log        = require ('ololog').configure ({ locate: false })
require ('ansicolor').nice;

(async function other () {

    const index = 4 // [ timestamp, open, high, low, close, volume ]


    const orders = await new ccxt.binance ().fetchOrderBook ('BTC/USDT')

    log.yellow ("\n" + "  _________________________ORDER BOOK: Binance BTC/USD________________________")

    console.log (orders)
    

    const markets = await new ccxt.binance ().fetchMarkets ()

    log.yellow ("\n" + "  _________________________Markets: Binance ________________________")

    console.log ( markets )
  
    const tickers = await new ccxt.binance ().fetchTickers()

    log.red ("\n" + "  _________________________Tickers: Binance ________________________")

    console.log ( tickers )

})()



