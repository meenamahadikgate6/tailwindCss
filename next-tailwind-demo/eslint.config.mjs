// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";
import spellcheck from "eslint-plugin-spellcheck";


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

// export default [
//   {
//     files: ["**/*.{js,jsx,ts,tsx}"],
//     plugins: {
//       spellcheck,
//     },
//     rules: {
//       "spellcheck/spell-checker": [
//         "warn", // Change to "error" if you want strict enforcement
//         {
//           comments: true,
//           strings: true,
//           identifiers: true,
//           lang: "en_US",
//           skipWords: ["aaaa"], // Remove this if you want "compny" to trigger an error
//           skipIfMatch: ["^[-\\w]+$"],
//           skipWordIfMatch: ["^foo.*$"],
//         },
//       ],
//     },
//   },
// ];
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{ts,tsx}"], // Apply ESLint rules to TypeScript files
    languageOptions: {
      parser: tsparser, // Use TypeScript parser
    },
    plugins: {
      "@typescript-eslint": tseslint,
      spellcheck,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // Example TypeScript rule
      "@typescript-eslint/explicit-module-boundary-types": "off",
            "spellcheck/spell-checker": [
        "warn", // Change to "error" if you want strict enforcement
        {
          comments: true,
          strings: true,
          identifiers: true,
          lang: "en_US",
         "skipWords": [
          "antialiased",
          "bg",
          "2xl",
          "3xl",
          "6xl",
          "mb"
        ],
        "skipIfMatch": [
          "^bg-",
          "^text-",
          "^shadow-",
          "^p-",
          "^m-",
          "^w-",
          "^h-"
        ],
        },
      ],
    },
  },
];