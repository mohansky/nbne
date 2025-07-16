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
  // Webpack config to exclude instrumentation completely
  webpack: (config ) => {
    // Exclude instrumentation from both client and server bundles
    config.resolve.alias = {
      ...config.resolve.alias,
      './instrumentation': false,
      './instrumentation.js': false,
      './instrumentation.ts': false,
      '../instrumentation': false,
      '../instrumentation.js': false,
      '../instrumentation.ts': false,
    };
    
    // Exclude instrumentation from module resolution
    config.externals = config.externals || [];
    if (typeof config.externals === 'function') {
      const originalExternals = config.externals;
      config.externals = (context, request, callback) => {
        if (request.includes('instrumentation')) {
          return callback(null, 'commonjs ' + request);
        }
        return originalExternals(context, request, callback);
      };
    } else {
      config.externals.push(({ request }) => {
        if (request && request.includes('instrumentation')) {
          return 'commonjs ' + request;
        }
        return false;
      });
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