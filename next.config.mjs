const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  const { build } = await import("velite");
  await build({ watch: isDev, clean: !isDev });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  experimental: {
    instrumentationHook: false, // Disable instrumentation
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-3d943afeed9643318d31712e02ebf613.r2.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Additional webpack config to exclude instrumentation
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        './instrumentation': false,
        './instrumentation.js': false,
        './instrumentation.ts': false,
      };
    }
    return config;
  },
};

export default nextConfig;


// const isDev = process.argv.indexOf("dev") !== -1;
// const isBuild = process.argv.indexOf("build") !== -1;

// if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
//   process.env.VELITE_STARTED = "1";
//   const { build } = await import("velite");
//   await build({ watch: isDev, clean: !isDev });
// }

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: { ignoreBuildErrors: true },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "pub-3d943afeed9643318d31712e02ebf613.r2.dev",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;