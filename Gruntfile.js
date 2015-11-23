module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');

  /**
   * Load the configuration from a given folder
   *
   * @param  {[type]} folder [description]
   * @return {[type]}        [description]
   */


  // Configuration object containing all paths
  var config = {
    pkg         : grunt.file.readJSON('package.json'),
    name        : '<%= pkg.name %>',

    grunt       : '.grunt',

    source      : 'src',
    builds      : 'dist',

    paths: {
      original: {
        js      : '<%= source %>'
      },

      builds: {
        js      : '<%= builds %>',
      }
    }
  };

  // Load all tasks
  var gruntPath = './' + config.grunt + '/';
  config.uglify = require(gruntPath + 'assets/uglify.js');
  console.log(config.uglify);
  grunt.initConfig(config);

  // Load custom tasks
  require(gruntPath + 'tasks.js')(grunt);
};
