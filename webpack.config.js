
module.exports = {
	 entry: ["./bot.js", "./graph.js","./symbols"],
	  output: {
		     filename: "bundle.js"
      },
       resolve: {
	       extensions: ['.js', '.es6']
       }
}
