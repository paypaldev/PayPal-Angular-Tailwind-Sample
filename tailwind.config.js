/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            'paypal-gold': '#ffc53a',
            'paypal-black': '#222'
        },
        backgroundImage: {
            'paypal-logo': "url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png)"
        }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}