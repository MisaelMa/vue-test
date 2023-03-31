

module.exports = {
  css: [
    './assets/main.css',
],
 // presets: [require('@vercel/examples-ui/tailwind'), ui],
  // `ui.content` includes a path to the components that are using tailwind in @acme/ui
  content: [  
    '../../packages/ui/components/**/*.{vue,ts,tsx}',
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
}
