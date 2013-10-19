module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        background: true
      }
    },
    watch: {
      //run unit tests with karma (server needs to be already running)
      karma: {
        files: ['app/scripts/*.js', 'test/spec/**/*.js'],
        tasks: ['karma:unit:run'] //NOTE the :run flag
      }
    }
    // run grunt karma:unit:start watch
  });
};
