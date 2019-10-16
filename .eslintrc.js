module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  plugins: ["jest"],
}
