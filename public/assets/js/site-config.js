/**
 * Central editable config for the static site export.
 * Change values here instead of editing multiple scripts.
 */
(function() {
  window.NOVELLE_SITE_CONFIG = {
    routing: {
      origin: "https://dermato-wbs.framer.website",
      allowed: ["https://dermato-wbs.framer.website/"],
      currentPath: "/",
      relativeRoot: "./"
    },
    branding: {
      wordmark: "./Logo%20Novelle/pngs/wordmark%20_%20gradient@4x.png",
      logomark: "/logos/gold-logomark.png",
      buttonLogomark: "/logos/gold-logomark.png",
      buttonIconScale: 1
    },
    assets: {
      faviconLight: "/logos/gold-logomark.png",
      faviconDark: "/logos/gold-logomark.png",
      appleTouchIcon: "/logos/gold-logomark.png",
      ogImage: "/005%20Wall%20Sign%20Logo%20Mockup%20Indoor.png",
      twitterImage: "/005%20Wall%20Sign%20Logo%20Mockup%20Indoor.png"
    }
  };

  function setAttr(selector, attr, value) {
    if (!value) return;
    var node = document.querySelector(selector);
    if (node) node.setAttribute(attr, value);
  }

  function applyHeadAssets() {
    var assets = window.NOVELLE_SITE_CONFIG && window.NOVELLE_SITE_CONFIG.assets;
    if (!assets) return;

    setAttr('link[rel="icon"][media*="light"]', "href", assets.faviconLight);
    setAttr('link[rel="icon"][media*="dark"]', "href", assets.faviconDark);
    setAttr('link[rel="apple-touch-icon"]', "href", assets.appleTouchIcon);
    setAttr('meta[property="og:image"]', "content", assets.ogImage);
    setAttr('meta[name="twitter:image"]', "content", assets.twitterImage);
  }

  applyHeadAssets();
})();
