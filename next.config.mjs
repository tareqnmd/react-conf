/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.react-finland.fi',
			},
			{
				protocol: 'https',
				hostname: 'typeofconf.com',
			},
			{
				protocol: 'https',
				hostname: 'www.reason-conf.com',
			},
		],
	},
	async redirects() {
		return [
			{
				source: '/conference',
				destination: '/',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
