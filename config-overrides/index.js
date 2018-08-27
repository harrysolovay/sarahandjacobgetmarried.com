const {
  getBabelLoader,
} = require('react-app-rewired')
const {
  createLoaderMatcher,
  findRule,
  addBeforeRule,
  rootPath
} = require('./utilities')
const InlineSourcePlugin = require('html-webpack-inline-source-plugin')
const FaviconsPlugin = require('favicons-webpack-plugin')

module.exports = (config, env) => {

    // use .babelrc
    const babelLoader = getBabelLoader(config.module.rules)
    if(!babelLoader) throw new Error('Babel config bug')
    babelLoader.options.babelrc = true

    // create loaderMatcher for ESLint
    const eSLintLoaderMatcher = createLoaderMatcher('eslint-loader')

    // use .eslintrc
    const rule = findRule(
      config.module.rules,
      eSLintLoaderMatcher
    )

    if(!rule) {
      throw new Error('ESLint config bug')
    }

    delete rule.options.baseConfig
    rule.options.useEslintrc = true

    // use styled-components compatible .stylerc 
    const styleLintRules = {
      loader: 'stylelint-custom-processor-loader',
      options: {
        configPath: null,
        emitWarning: true,
      },
    }

    addBeforeRule(
      config.module.rules,
      eSLintLoaderMatcher,
      styleLintRules
    )

    if(env === 'production') {

      config.plugins.forEach((plugin) => {
        if(plugin.options && plugin.options.template) {
          plugin.options.inlineSource = 'main.*.js'
        }
      })

      config.plugins = (config.plugins || []).concat([
        new InlineSourcePlugin(),
        new FaviconsPlugin({
          logo: `${ rootPath }/src/assets/images/icon.png`,
          prefix: 'icons-[hash]/',
          emitStats: 'false',
          persistentCache: true,
          inject: true,
          background: '#fff',
          title: 'Blockstack EvangeLIST',
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false,
          },
        })
      ])

    }

    return config

}