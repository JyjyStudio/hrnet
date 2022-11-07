/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
	/**
	 * Tell Next.js where the `public` folder is.
	 */
	assetPrefix: isProd ? '/hrnet/' : '',
	/**
	 * Disable server-based image optimization.
	 *
	 * @see https://nextjs.org/blog/next-12-3#disable-image-optimization-stable
	 */
	basePath: '/assets',
	images: {
		unoptimized: true,
	},
}

module.exports = nextConfig

