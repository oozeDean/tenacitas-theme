module.exports = function(grunt) {

  var jsFileList = [
    'js/libs/*.js',
    'js/scripts.js'
  ];

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sprite:{
      all: {
        src: 'img/sprites/*.png',
        destImg: 'sprites/sprite.png',
        destCSS: 'sass/_sprites.scss',
        'cssFormat': 'scss',
      }
    },

    // Sass: dev & build 
    sass: {
      dev: {
        options: {
          style: 'expanded',
          require: 'susy',
          sourcemap: true
        },
        files: {                         
          'css/style.css': 'sass/style.scss'
        }
      },
      build: {
        options: {
          style: 'compressed',
          require: 'susy',
          sourcemap: false
        },
        files: {                         
          'css/style.css': 'sass/style.scss'
        }
      }
    },

    // Concat: concatinates jsList
    concat: {
      options: {
        separator: ' ',
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dev: {
        src: [jsFileList],
        dest: 'js/application.js'
      },
      build: {
        src: [jsFileList],
        dest: 'js/application.min.js'
      }
    },

    // Imagemin: compresses images
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img'
        }]
      }
    },

    // SVG min
    svgmin: { //minimize SVG files
      options: {
        plugins: [
          { removeViewBox: false },
          { removeUselessStrokeAndFill: false }
        ]
      },
      dist: {
        expand: true,
        cwd: 'img/',
        src: ['*.svg'],
        dest: 'img/'
      }
    },

    // Uglify 
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'js/application.min.js': 'js/application.min.js',
        }
      }
    },

    // CSS min
    cssmin: {
      minify: {
        options: {
        },
        files: {
          'css/style.css': 'css/style.css'
          }
      }
    },

    watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass:dev']
      },
      javascripts: {
        files: ['js/scripts.js'],
        tasks: ['concat']
      },
      sprite: {
      	files: ['img/sprites/*.png'],
      	tasks: ['sprite']
      }
    },

    tag: {
      banner: '/* <%= pkg.name %>*/\n' +
              '/* v<%= pkg.version %>*/\n' +
              '/* <%= pkg.author %>*/\n' +
              '/* Last updated: <%= grunt.template.today("dd-mm-yyyy") %> */\n' +
              '/* This is a generated file: any changes made here will be lost. */\n'
    },

  });

  // Default task.
  grunt.registerTask('default', ['sass:dev', 'concat:dev', 'sprite']);

  // Build Task
  grunt.registerTask('build', ['sass:build', 'concat:build', 'imagemin', 'uglify', 'cssmin', 'svgmin', 'sprite']);

};