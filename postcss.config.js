module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: [
        'defaults',
        'last 3 versions', 
        '> 1%',
        'last 5 iOS versions',
        'not ie < 9',
      ]
    })
  ]
}