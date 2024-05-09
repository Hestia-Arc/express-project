let mix = require("laravel-mix");

// mix.copy("node_modules/bootstrap/dist/css/bootstrap.css", "public/stylesheets/index.css")

mix.sass('resources/sass/index.scss', 'public/stylesheets/app.css')
    .js('resources/js/index.js', 'public/javascripts')
    .copy('resources/sass/index.css', 'public/stylesheets/index2.css')
    .copy('resources/sass/blog.css', 'public/stylesheets/');