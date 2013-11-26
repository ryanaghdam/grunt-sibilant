/*
 * grunt-sibilant
 * https://github.com/ryanaghdam/grunt-sibilant
 *
 * Copyright (c) 2013 Ryan Aghdam
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var path = require("path");
  var sibilant = require("sibilant");

  grunt.registerMultiTask('sibilant', 'Compile Sibilant files', function() {
    this.files.reduce(function(p, c, i, a) {
      c.src.forEach(function(x) {
        p.push(x);
      });
      return p;
    }, []).forEach(function(src) {
      var dest = (function() {
        var dirname = path.dirname(src);
        var basename = path.basename(src, path.extname(src));
        return path.join(dirname, basename + ".js");
      }());

      grunt.file.write(dest, sibilant.translateFile(src));
      grunt.log.writeln("Writing: " + src + " -> " + dest);
    });
  });
};
