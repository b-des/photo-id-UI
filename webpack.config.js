const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: ['./src/index.js'],

	output: {

		filename: 'bundle.js',
		library: 'PhotoPassport',
		libraryExport: "default",
		libraryTarget: 'umd',
		chunkFilename: '[name].bundle.js',
	},
	devtool: "source-map",
	optimization: {
		minimize: false,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.scss$/,
				use: [

					{
						loader: 'file-loader',
						options: {
							name: '[name].css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},

					{
						loader: 'sass-loader'
					},

				]
			},
			{
				test: /\.jsx?$/,
				exclude: path.resolve(__dirname, 'src'),
				enforce: 'pre',
				use: 'source-map-loader'
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Photo passport UI',
			template: 'src/index.html',
			inject:"head"
		}),
		new MiniCssExtractPlugin()
	],
	resolve: {
		alias: {
			'react': 'preact/compat',
			'react-dom': 'preact/compat',
			// Not necessary unless you consume a module using `createClass`
			'create-react-class': 'preact-compat/lib/create-react-class',
			// Not necessary unless you consume a module requiring `react-dom-factories`
			'react-dom-factories': 'preact-compat/lib/react-dom-factories'
		},
		extensions: ['.js', '.jsx', '.scss']
	},
};