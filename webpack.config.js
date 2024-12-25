import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
	entry: './src/index.js',
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.scss/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
				
			},
			
		],
		
	},
	
};