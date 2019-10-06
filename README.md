# bot
### Graphs, data, and attempt trading Bot using CCXT api abstractions


Majority of useful code is in `symbols.js`, `graph.js`, & `binance.js`

Current state of the project allows ability to read from exchanges, bootstrapped by CCXT api.

You'll probably need an API key from the exchange you want to operate with. I recommend Binance for ease of use.


### TERMINAL GRAPHS ETH/BTC PAIRS


```
node symbols.js && node graph.js && node bot.js && node binance.js
```


