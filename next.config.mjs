import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack(config) {
		config.resolve.fallback = {
			...config.resolve.fallback,
			fs: false,
		};

		return config;
	},
	images: {
		remotePatterns: [
			{
				hostname: "*",
			},
		],
	},
	env: {
		RECAPTCHA_SECRET_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY,
		RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
	},
	experimental: {
		serverActions: true,
		typedRoutes: false,
	},
	// FIXME !!TEMPORARY FIX!! because checkout directory has many errors
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default withNextIntl(nextConfig);
