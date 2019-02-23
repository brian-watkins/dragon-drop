// Karma configuration
// Generated on Fri Feb 22 2019 20:41:41 GMT-0500 (Eastern Standard Time)
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'spec/**/*.spec.ts'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec/**/*.spec.ts': [ "webpack", "sourcemap" ]
    },

    webpack: {
      mode: "development",
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".scss", ".vue"]
      },
      module: {
        rules: [
          // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
          { test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [ 
              { loader: "babel-loader" },
              { loader: "ts-loader",
                options: {
                  transpileOnly: true,
                  happyPackMode: false,
                  appendTsxSuffixTo: [
                    '\\.vue$'
                  ]
                } 
              }
            ]
          },
          {
            test: /\.scss$/,
            use: [ "vue-style-loader", "css-loader", "sass-loader" ]
          },
          {
            test: /\.vue$/,
            use: [ "vue-loader" ] 
          }
        ]
      },
      plugins: [
        new VueLoaderPlugin()
      ],
      devtool: "inline-source-map"
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    client: {
      mocha: {
        reporter: 'html'
      }
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
