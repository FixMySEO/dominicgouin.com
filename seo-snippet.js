// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.dominicgouin.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.dominicgouin.com/","title_tag":"Photographe commercial & mode | Dominic Gouin photographe","meta_description":"Photographe commercial, mode, culinaire, événementiel Québec et mariage professionnel. Service de photographie et vidéo industrielle par Dominic Gouin photographe."},{"page_url":"https://www.dominicgouin.com/bio","title_tag":"Photographe commercial & célébrités | Dominic Gouin","meta_description":"Biographie de Dominic Gouin photographe, expert en photographie commerciale, de mode, culinaire et photographe de célébrités pour la scène médiatique au Québec."},{"page_url":"https://www.dominicgouin.com/onset","title_tag":"Photographe commercial on set | Dominic Gouin","meta_description":"Service de photographie on set pour campagnes, publicité et mode. Photographe commercial et photographe de célébrités au Québec, Dominic Gouin photographe."},{"page_url":"https://www.dominicgouin.com/mode","title_tag":"Photographie de mode éditoriale | Dominic Gouin","meta_description":"Photographie de mode et éditoriale haut de gamme. Service de photographie pour magazines et marques de mode par Dominic Gouin photographe au Québec."},{"page_url":"https://www.dominicgouin.com/swimwear","title_tag":"Photographie de mode swimwear | Dominic Gouin","meta_description":"Shooting swimwear, beachwear et mode Californie. Photographie de mode pour marques et magazines, service de photographie par Dominic Gouin photographe."},{"page_url":"https://www.dominicgouin.com/music","title_tag":"Photographe de célébrités & musique | Dominic Gouin","meta_description":"Photographe de célébrités et artistes musique, portraits et concerts. Service de photographie professionnelle au Québec par Dominic Gouin photographe."},{"page_url":"https://www.dominicgouin.com/portraits","title_tag":"Photographe de célébrités Québec | Dominic Gouin","meta_description":"Portraits de célébrités internationales, artistes et personnalités publiques. Service de photographie haut de gamme par Dominic Gouin photographe."},{"page_url":"https://www.dominicgouin.com/restauration","title_tag":"Photographie culinaire & restaurant | Dominic Gouin","meta_description":"Photographie culinaire pour restaurant, hôtel et marques alimentaires. Service de photographie professionnelle par Dominic Gouin photographe au Québec."},{"page_url":"https://www.dominicgouin.com/m","title_tag":"Photographe commercial corporatif | Dominic Gouin","meta_description":"Photographe commercial pour entreprises, publicité et corporatif. Service de photographie et vidéo industrielle au Québec par Dominic Gouin photographe."}],"keywords":["photographe commercial","photographie culinaire","photographie de mode","événementiel québec","photographe de célébrités","mariage professionnel","vidéo industrielle","art et photographie","dominic gouin photographe","service de photographie"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.dominicgouin.com/#professionalservice",
  "url": "https://www.dominicgouin.com/",
  "name": "Dominic Gouin Photographe",
  "description": "Photographe professionnel basé au Québec, spécialisé en photographie commerciale, culinaire, publicitaire, de mode, de musique, de célébrités, d’hôtellerie, de restauration, corporative, e-commerce, événementielle, mariage, industrielle et artistique. Services disponibles à Montréal, Toronto, Los Angeles et Miami.",
  "image": "https://static.wixstatic.com/media/23606e_d8624d6995934559ab6c7fc36a184a4b.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/23606e_d8624d6995934559ab6c7fc36a184a4b.jpg",
  "logo": "https://static.wixstatic.com/media/23606e_d8624d6995934559ab6c7fc36a184a4b.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/23606e_d8624d6995934559ab6c7fc36a184a4b.jpg",
  "telephone": "+1-514-803-9617",
  "email": "mailto:dom@dominicgouin.com",
  "areaServed": [
    {
      "@type": "City",
      "name": "Montr\u00e9al"
    },
    {
      "@type": "City",
      "name": "Toronto"
    },
    {
      "@type": "City",
      "name": "Los Angeles"
    },
    {
      "@type": "City",
      "name": "Miami"
    }
  ],
  "serviceType": [
    "Photographie commerciale",
    "Photographie culinaire",
    "Photographie publicitaire",
    "Photographie de mode",
    "Photographie de musique",
    "Photographie de c\u00e9l\u00e9brit\u00e9s",
    "Photographie pour h\u00f4tel",
    "Photographie pour restaurant",
    "Photographie corporative",
    "Photographie e-commerce",
    "Photographie \u00e9v\u00e9nementielle",
    "Photographie de mariage",
    "Photographie industrielle",
    "Photographie artistique",
    "Vid\u00e9o"
  ],
  "founder": {
    "@type": "Person",
    "name": "Dominic Gouin",
    "jobTitle": "Photographe",
    "url": "https://www.dominicgouin.com/bio"
  },
  "sameAs": [
    "https://www.linkedin.com",
    "https://www.instagram.com",
    "https://www.facebook.com"
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
