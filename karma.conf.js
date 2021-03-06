// Karma configuration
// Generated on Fri Dec 05 2014 20:16:53 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
    //lib files
    'client/lib/flux/dist/Flux.js',
    'client/lib/react/react-with-addons.js',
    'client/lib/eventEmitter/EventEmitter.js',
    'client/lib/underscore/underscore.js',
    'client/lib/jquery/dist/jquery.js',
    'client/lib/page/page.js',
    'client/lib/socket.io-client/socket.io.js',

    //app code
    'client/app/app.js',
    'client/app/**/*.js',

    //spec files
    'node_modules/expect.js/index.js',
    'specs/client/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      'karma.conf.js',
      'client/app/starter.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['nyan'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
