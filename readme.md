This is some minimal boilerplate to get started with test-driven development using Karma, Mocha, and Chai. It uses Grunt to watch for file changes and re-run tests automatically.

# Getting started

Clone this project, then run `npm install` to install dependencies.

Then run `grunt test`. This will begin watching files within the `app/` and `test/` directories for changes. When there are file changes to any of the js files inside either directory, the tests inside the `test/` directory will be run.

The boilerplate is set up to only run tests in Chrome. If you'd like to add more browsers, that option is available in `karma.conf.js`.
