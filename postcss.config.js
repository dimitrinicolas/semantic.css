module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-inline-media'),
    require('postcss-calc')({
      preserve: false
    }),
    require('postcss-size'),
    require('postcss-axis'),
    require('autoprefixer'),
    require('postcss-pxtorem')({
      replace: false
    }),
    require('css-mqpacker')({
      sort: require('sort-css-media-queries').desktopFirst
    }),
    require('postcss-clean')({
      level: {
        1: {
          all: true,
          specialComments: 0
        },
        2: {
          all: true
        }
      }
    })
  ]
};
