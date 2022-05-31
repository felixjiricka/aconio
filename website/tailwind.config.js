const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{html,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        container: {
            center: true,
        },
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tw-elements/dist/plugin'),
        plugin(function ({addBase, theme}) {
            addBase({
                '.container': {
                    paddingLeft: '1.8rem',
                    paddingRight: '1.8rem'
                }
            })
        })
    ],
};
