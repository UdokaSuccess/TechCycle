module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,html,json,css}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};