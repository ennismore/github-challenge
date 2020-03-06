module.exports = {
  "presets": [
    "next/babel",
    "@zeit/next-typescript/babel",
    "@emotion/babel-preset-css-prop"
  ],
  "plugins": [
    "emotion",
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": {
          "@": "./src/modules"
        }
      }
    ],
    "mobx-deep-action",
    "transform-class-properties",
    "@babel/plugin-proposal-optional-chaining"
  ]
}
