module.exports = {
    content: ['./src/**/*.{html,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tw-elements/dist/plugin')
    ],
};
