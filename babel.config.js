module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	env: {
		production: {
			plugins: ['react-native-paper/babel']
		}
	},
	plugins: [
		['module-resolver', {
			alias: {
				'@pages': './src/pages',
				'@routes': './src/routes',
				'@contexts': './src/contexts',
				'@assets': './src/assets',
				'@components': './src/components',
				'@utils': './src/utils'
			}
		}]
	]
}
