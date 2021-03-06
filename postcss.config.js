module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'iOS >= 8']
    }),
    require('cssnano')({
      preset: 'default'
    })
  ]
};