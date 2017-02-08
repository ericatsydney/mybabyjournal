const elixir = require('laravel-elixir');
//const browserify = require('laravel-elixir-browserify');

//require('laravel-elixir-vue-2');
//require('laravel-elixir-livereload');
//elixir.config.sourcemaps = false;
//require('laravel-elixir-webpack');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
 // browserify.init();

  mix.sass('app.scss')
  //   .browserify('app.js', {
  //     fast: true,
  //     bundleExternal: false});
      .webpack('app.js');
      //.livereload();
});
