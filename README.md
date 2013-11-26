# grunt-sibilant

> Compile Sibilant to JavaScript

## Getting Started
This plugin requires Grunt `~0.4.2`

**This module does not have unit tests.**

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install grunt-sibilant --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sibilant');
```

## The "sibilant" task

### Overview
In your project's Gruntfile, add a section named `sibilant` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sibilant: {
    options: {
      files: ["src/**/*.sibilant", "test/**/*.sibilant"]
    },
  },
})
```

### Options

#### options.files
Type: `Array`

List of file patterns to compile


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding
style. Add unit tests for any new or changed functionality. Lint and test your
code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
