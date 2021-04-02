module.exports = {
  /**
   * Configure SVG loader for icon components:
   *
   * @param {import('webpack').Configuration} config
   */
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      use: 'react-svg-loader',
    });

    if (!isServer) {
      // Unset client-side javascript that only works server-side
      // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
      config.node = { fs: 'empty', module: 'empty' };
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
