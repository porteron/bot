# Crypto Bot & Data CCXT

### Graphs, data, and attempt trading Bot using CCXT api abstractions


Majority of useful code is in `symbols.js`, `graph.js` & `binance.js`

Current state of the project allows ability to read from exchanges, bootstrapped by CCXT api.

[CCXT Repository](https://github.com/ccxt/ccxt)

You'll probably need an API key from the exchange you want to operate with. I recommend Binance for ease of use.

#### Install Dependencies
```
npm install
```

#### Display graphs and data in the terminal for ETH/BTC pairs
##### Run the following commands 

```bash
# Run symbols script
node symbols.js
# Run graph script
node graph.js
# Run bot script
node bot.js
# Run binance script
node binance.js
```


