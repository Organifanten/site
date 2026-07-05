const config = {
  plugins: ["prettier-plugin-jinja-template", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: ["*.njk"],
      options: {
        parser: "jinja-template",
      },
    },
  ],
};

module.exports = config;
