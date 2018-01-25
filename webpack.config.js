
module.exports = {
	 entry: ["./bot.js", "./graph.js","./symbols","./binance.js"],
	  output:{
		     filename: "bundle.js"
      },
       resolve:{
	       extensions: ['.js', '.es6']
       }
}
