/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./content/**/*.md",
    "./themes/**/layouts/**/*.html",
    "./layouts/**/*.html"
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1024px',
        '2xl': '1024px',
      },
    },
    extend: {
        colors: {
          "font-base": "#d82a20",
          "font-text-base": "#444",
          "font-comment": "rgb(216 42 32 / 50%)",
          "post-bg-color": "#eeeeee",
          "hashtag-ddd": "#ddd",
          "color-hex-ddd": "#ddd",
          "content-color": "#444",
          "sitebgc": "#edede5",
          "aside-bg-color": "#f1f1ef",
          "white": "#ffffff",
          "link-color": "#d82a20",
          "link-color-blue": "#006eff",
        },
        boxShadow: {
          "post-container": "0 0 2px #dddddd"
        }
    },
    fontFamily: {
      "body": [
        // '-apple-system, "system-ui", "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        'Lato', 'Helvetica', 'Tahoma', 'Arial', '"Hiragino Sans GB"', '"Heiti SC"', '"Microsoft YaHei"',
        '"WenQuanYi Micro Hei"', 'Heiti', 'ubuntu', 'SimSun', 'sans-serif',
      ],
    },
  },
  plugins: [],
}
