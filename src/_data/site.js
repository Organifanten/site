const isProd = process.env.ELEVENTY_ENV === "production" && process.env.CONTEXT !== "deploy-preview"; // Netlify previews off

module.exports = {
  isProd,
  gaId: "G-L983C2Y3JS",
};
