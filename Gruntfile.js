module.exports = function(grunt) {
  grunt.initConfig({
    /* This line tells grunt where the
    package.json file is and tells it to read it */
    pkg: grunt.file.readJSON('package.json'),

    /**
    * Sass
    */
    sass: {
      dev: {
        options: {
          style: 'expanded',
          sourcemap: 'none',
        },
        files: {
          'main.css': 'main.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
        },
        files: {
          'main.min.css': 'main.scss'
        }
      }
    },

    /**
    * Autoprefixer
    */
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      // prefix all files
      multiple_files: {
        expand: true,
        flatten: true,
        src: '*.css',
        dest: ''
      }
    },

    /**
    * Watch Task
    */
    watch: {
      options: {
          livereload: true
        },
      css: {
        /* Whenever anything happens to any
        file with the .scss extension, then... */
        files: '**/*.scss',
        /* ... trigger these following tasks (it's an array
         so you can add other tasks that you define) */
        tasks: ['sass', 'autoprefixer']
      },
      html: {
        files: ['index.html']
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: '.',
          hostname: '0.0.0.0',
          protocol: 'http',
          livereload: true,
          open: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  /* Tell grunt to load the different task runners we will be using */
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  /* Then register the watch task so that when you run grunt
  as a function, it will automatically run the watch task as well
  You can name this defaul task anything you want, here we named it default */
  grunt.registerTask('default', ['connect','watch']);
};
