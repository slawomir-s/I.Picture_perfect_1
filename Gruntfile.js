module.exports = function (grunt) {
    
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'css/style.css': 'sass/style.sass'
                }
            }
        },
        watch: {
            sass: {
                files: ['sass/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: true,
                    browser: ['chrome']
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    
    grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
};