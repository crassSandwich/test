const ClosureCompilerPlugin = require('webpack-closure-compiler');
const merge = require('webpack-merge');
const base = require ('./webpack.server.config.js')

// include the bare minimum and also closure compile

module.exports = merge (base, {
	plugins: [
        new ClosureCompilerPlugin({
          compiler: {
            language_in: 'ECMASCRIPT6',
            language_out: 'ECMASCRIPT5'
          },
          concurrency: 3,
		})
    ]
});
