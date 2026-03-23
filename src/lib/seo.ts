// src/lib/seo.ts
export const SITE_NAME = "GearVN Clone";
export const SITE_URL = "https://gearvn-clone-t14d.vercel.app";

export function absoluteUrl(path = "") {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildTitle(title?: string) {
  if (!title) return SITE_NAME;
  return `${title} | ${SITE_NAME}`;
}

export function cleanText(text?: string, fallback = "") {
  if (!text) return fallback;
  return text.replace(/\s+/g, " ").trim();
}