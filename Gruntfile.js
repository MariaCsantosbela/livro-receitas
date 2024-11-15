module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      // Compilação de LESS
      less: {
        development: {
          files: {
            'dist/styles.css': 'src/styles.less' // Ajuste os caminhos conforme necessário
          }
        }
      },
  
      // Compressão de JavaScript
      uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'dist/scripts.min.js': ['src/scripts.js'] // Ajuste os caminhos conforme necessário
          }
        }
      }
    });
  
    // Carregar plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Registrar tarefas padrão
    grunt.registerTask('default', ['less', 'uglify']);
  };
  