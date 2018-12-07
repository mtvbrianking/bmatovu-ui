let mix = require('laravel-mix');

let tailwindcss = require('tailwindcss');

mix.postCss('assets/css/tailwind.css', 'public/css', [
  tailwindcss('./tailwind.js'),
]);
