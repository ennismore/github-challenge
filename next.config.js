const webpack = require('webpack');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withSourceMaps(
  withCSS(
    withFonts(
      withImages({
        webpack(config, options) {
          return config;
        },
        publicRuntimeConfig: {
          ENVIRONMENT: process.env.ENVIRONMENT || 'dev',
        },
      })
    )
  )
);
