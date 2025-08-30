import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      '*.glsl': {
        loaders: [
          {
            loader: 'raw-loader',
            options: {},
          },
        ],
        as: '*.js',
      },
    },
  },

};

export default nextConfig;
