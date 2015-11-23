module.exports = function (grunt) {

  grunt.registerTask('default', 'Build assets for local development', [
    'js'
  ]);

  grunt.registerTask('rebuild', 'Rebuild all assets from scratch', [
    'default'
  ]);

  // Assets
  //////////////////////

  grunt.registerTask('js', 'Build all javascript files', [
    'uglify'
  ]);
};
