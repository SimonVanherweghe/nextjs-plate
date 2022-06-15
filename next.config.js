module.exports = {
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		const allAliases = {
			'react/jsx-runtime.js': 'react/jsx-runtime',
			'react/jsx-dev-runtime.js': 'react/jsx-dev-runtime',
		};
		config.resolve.alias = { ...config.resolve.alias, ...allAliases };
		return config
	},
}

