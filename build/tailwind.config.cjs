/** @type {import('tailwindcss').Config} */
module.exports = {
    entry: './index.ts',
    content: ["./public/**/*.{html,pug,js}"],
    theme: {
        colors: {
            verde: "#9EC5AB"
        },
        extend: {},
    },
    plugins: [],
};
export {};
