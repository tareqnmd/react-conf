/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.react-finland.fi',
			},
		],
	},
};

export default nextConfig;
