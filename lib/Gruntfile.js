module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      js: {
        src: ['../javascripts/main.js',],
        dest: '../dist/app.js',
      },
    },
    watch: {
      options: {
        livereload: true,
      },
      javascripts: {
        files: ['../javascripts/**/*.js',],
        tasks: ['browserify',],
      },
    },
    clean: {
      options: { force: true, },
      public: ['../build',],
    },
    copy: {
      dev: {
        files: [
          {
            expand: true,
            cwd: '../',
            src: [
              'index.html',
              'dist/**/*.js',
              'styles/**/*.css',
              'db/apiKeys.json',
              'images/**/*.png'
            ],
            dest: '../build/',
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['browserify', 'watch',]);
  grunt.registerTask('deploy', ['browserify', 'copy',]);
  grunt.registerTask('cleanit', ['clean',])
};
