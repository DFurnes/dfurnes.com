module.exports = {
  /**
   * Enable experimental Next.js features.
   */
  future: {
    webpack5: true,
  },

  /**
   * Configure Webpack.
   *
   * @param {import('webpack').Configuration} config
   */
  webpack: (config, { isServer }) => {
    // Configure SVG loader for icon components:
    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      use: 'react-svg-loader',
    });

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },

  /**
   * Configure Splitbee.
   */
  async rewrites() {
    return [
      {
        source: '/bee.js',
        destination: 'https://cdn.splitbee.io/sb.js',
      },
      {
        source: '/_hive/:slug',
        destination: 'https://hive.splitbee.io/:slug',
      },
    ];
  },
};
