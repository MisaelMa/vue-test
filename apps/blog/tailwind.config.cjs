/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
 const path = require('path')

const talwin = require('ui/tailwind.config.cjs') 


 module.exports = {
    darkMode: "class",
    css: [
        '@/assets/css/main.css',
    ],
    content: [
        ...talwin.content,
        "./index.html",
       "./src/components/**/*.{js,vue,ts}",
        "./src/layouts/**/*.vue",
        "./src/pages/**/*.vue",
        "./src/plugins/**/*.{js,ts}",
    ],
    theme: {
        extend: {},
    },
    
    plugins: [],
    variants: {
      backgroundColor: [
        "dark",
        "dark-hover",
        "dark-group-hover",
        "dark-even",
        "dark-odd"
      ],
      borderColor: ["dark", "dark-focus", "dark-focus-within"],
      textColor: ["dark", "dark-hover", "dark-active"]
    }
  };
  