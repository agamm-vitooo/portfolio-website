/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        color: {
            transparent: 'transparent',
            current: 'currentColor',
            'black': '#15012a',
            'spring': '#daf2da'
        },
        extend: {}
    },
    daisyui: {
        themes: [{
            mytheme: {
                "primary": "#641ae6",
                "secondary": "#d926a9",
                "accent": "#1fb2a6",
                "neutral": "#f0abfc",
                "base-100": "#1d232a",
                "info": "#3abff8",
                "success": "#36d399",
                "warning": "#fbbd23",
                "error": "#f87272",
            },
        }, ],
    },
    plugins: [require("daisyui")],
}