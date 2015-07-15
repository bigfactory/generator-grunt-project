/*
 * <%=data.projectname%>
 * <%=data.projecthomepage%>
 *
 * Copyright (c) 2015 xiaocong.hxc
 * Licensed under the MIT license.
 */

'use strict';

var chalk = require('chalk');
var path = require('path');

module.exports = function(grunt) {

    grunt.registerMultiTask('<%=data.taskname%>', '<%=data.description%>', function() {
        var options = this.options({
            
        });

        this.files.forEach(function(f) {
            f.src.map(function(srcFile) {

                //var srcCode = grunt.file.read(srcFile);
                // grunt.file.write(f.dest, srcCode);
                // grunt.log.writeln('File ' + chalk.cyan(f.dest) + ' updated');
                
            });


        });
    });

};