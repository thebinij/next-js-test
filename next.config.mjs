// import withBundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH || '/ssr',
  // Enable source map if needed
  productionBrowserSourceMaps: true,
  output: 'standalone'
};

export default nextConfig;
// export default withBundleAnalyzer({
//     ...nextConfig,
//     enabled: process.env.ANALYZE === 'true',
//     env: {
//         NEXT_PUBLIC_ENV: 'production', //your next configs goes here
//     },
// })
