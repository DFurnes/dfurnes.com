module.exports = {
  /**
   * Configure SVG loader for icon components:
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
};
