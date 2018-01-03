
module.exports = {
	 entry: ["./bot.js", "./ticker.js","./symbols"],
	  output: {
		     filename: "bundle.js"
      },
       resolve: {
	       extensions: ['.js', '.es6']
       }
}
