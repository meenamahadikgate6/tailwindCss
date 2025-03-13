// const config = {
//   plugins: ["@tailwindcss/postcss"],
// };

// export default config;


module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};


// module.exports = {
//   syntax: 'postcss-scss',
//   plugins: [
//       'postcss-sassy-mixins',
//       'postcss-import',
//       'postcss-flexbugs-fixes',
//       'postcss-advanced-variables',
//       [
//           'postcss-preset-env',
//           {
//               autoprefixer: {
//                   flexbox: 'no-2009',
//               },
//               stage: 3,
//               features: {
//                   'custom-properties': false,
//                   'nesting-rules': true,
//               },
//           },
//       ],
//       ['postcss-px2rem', { remUnit: 75 }],
//   ],
// };