import { useEffect } from "react";

const SITE_URL = "https://nishal-design-studio.base44.app"; // swap to the custom domain when it is connected
const SITE_NAME = "Nishal Interiors, Mumbai";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  if (content) {
    el.setAttribute("content", content);
  } else {
    el.remove();
  }
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  if (href) {
    el.setAttribute("href", href);
  } else {
    el.remove();
  }
}

function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Lightweight SEO component. Sets title, meta description, canonical,
 * Open Graph, Twitter card, robots and optional JSON-LD on mount.
 */
export default function SEO({
  title,
  description,
  path = "/",
  image,
  jsonLd,
  noindex = false,
}) {
  useEffect(() => {
    const fullTitle = title;
    const url = `${SITE_URL}${path}`;
    document.title = fullTitle;
    document.documentElement.lang = "en-IN";

    setMeta("name", "description", description);
    setLink("canonical", url);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_IN");
    if (image) setMeta("property", "og:image", image);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    if (image) setMeta("name", "twitter:image", image);

    const robots = noindex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large";
    setMeta("name", "robots", robots);

    if (jsonLd) {
      if (Array.isArray(jsonLd)) {
        jsonLd.forEach((block, i) => setJsonLd(`ld-${i}`, block));
      } else {
        setJsonLd("ld-0", jsonLd);
      }
    }

    return () => {
      // leave tags in place on unmount to avoid flicker between sibling routes
    };
  }, [title, description, path, image, jsonLd, noindex]);

  return null;
}

export { SITE_URL, SITE_NAME };