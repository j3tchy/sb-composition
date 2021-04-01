module.exports = {
  "stories": [
    "../stories/*.stories.mdx",
    // "../packages/experimental/src/**/*.stories.mdx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  refs: {
    "components": {
      "title": "Components!",
      "url": "http://localhost:6007"
    },
    "experimental": {
      "title": "Experimental!",
      "url": "http://localhost:6008",
    }
  }
}