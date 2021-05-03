/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

module.exports = {
  mode: 'spa',
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      borderOpacity: {
        5: '0.05',
        10: '0.1',
        20: '0.2'
      }
    }
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
    borderWidth: ['dark'],
    borderColor: ['dark', 'dark-hover', 'dark-focus', 'dark-focus-within', 'hover', 'responsive', 'focus'],
    borderOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'dark'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive', 'dark-placeholder'],
    placeholderColor: ['responsive', 'focus', 'hover', 'active'],
    backgroundOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'dark']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    whitelist: ['dark-mode']
  }
}
