module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    900: '#234B35',
                    700: '#5D7A4D',
                },
                accent: '#D4A373',
                cream: '#FAF8F3',
            },
            fontFamily: {
                heading: ['Sora', 'Outfit', 'Inter', 'sans-serif'],
                body: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                soft: '0 8px 30px rgba(16,24,40,0.06)',
            },
        },
    },
    plugins: [],
};
