// bare minimum required to run a server

module.exports = {
	mode: 'production',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
	}
};
