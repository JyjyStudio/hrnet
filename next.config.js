/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
	images: {
		loader: 'custom',
		unoptimized: true
	},
	experimental: {
		images: {
			unoptimized: true
		}
	}
}

module.exports = nextConfig
