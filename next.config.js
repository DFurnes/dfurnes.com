module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      use: 'react-svg-loader',
    });

    return config;
  },
};
