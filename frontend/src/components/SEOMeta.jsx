import { useEffect } from 'react';

const SEOMeta = ({ 
  title = "S.R. Electronics - Transformer Manufacturer | Rajesh Asthana | Delhi",
  description = "Leading transformer manufacturer in Delhi by Rajesh Asthana. Specializing in Control, Power, Distribution, Isolation & Auto Transformers. 20+ years experience, ISO certified.",
  keywords = "S.R. Electronics, SR Electronics, transformer manufacturer, control transformers, power transformers, distribution transformers, isolation transformers, auto transformers, Delhi",
  canonical = "https://www.srelectronics.store",
  ogImage = "/ogimage.jpeg",
  ogType = "website",
  schemaMarkup = null,
  breadcrumbs = null,
  faqSchema = null
}) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta tags
    updateMetaTag('meta', 'name', 'description', description);
    updateMetaTag('meta', 'name', 'keywords', keywords);
    updateMetaTag('meta', 'property', 'og:title', title);
    updateMetaTag('meta', 'property', 'og:description', description);
    updateMetaTag('meta', 'property', 'og:image', ogImage);
    updateMetaTag('meta', 'property', 'og:type', ogType);
    updateMetaTag('meta', 'property', 'og:url', canonical);
    updateMetaTag('meta', 'property', 'twitter:title', title);
    updateMetaTag('meta', 'property', 'twitter:description', description);
    updateMetaTag('meta', 'property', 'twitter:image', ogImage);
    
    // Update canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
    
    // Update schema markup
    if (schemaMarkup) {
      updateSchemaMarkup(schemaMarkup);
    }
    
    // Update breadcrumb schema
    if (breadcrumbs) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      };
      updateSchemaMarkup(breadcrumbSchema, 'breadcrumb');
    }
    
    // Update FAQ schema
    if (faqSchema) {
      const faq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqSchema.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };
      updateSchemaMarkup(faq, 'faq');
    }
  }, [title, description, keywords, canonical, ogImage, ogType, schemaMarkup, breadcrumbs, faqSchema]);

  return null;
};

function updateMetaTag(tagType, attrName, attrValue, content) {
  // Skip if content is empty or invalid
  if (!content) return;
  
  let tag = document.querySelector(`${tagType}[${attrName}="${attrValue}"]`);
  if (!tag) {
    tag = document.createElement(tagType);
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  if (tagType === 'meta') {
    tag.setAttribute('content', content);
  }
}

function updateSchemaMarkup(schemaMarkup, type = 'main') {
  if (!schemaMarkup) return;
  
  const selector = type === 'main' 
    ? 'script[type="application/ld+json"]:not([data-type])'
    : `script[type="application/ld+json"][data-type="${type}"]`;
  
  let schemaScript = document.querySelector(selector);
  if (!schemaScript) {
    schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    if (type !== 'main') {
      schemaScript.setAttribute('data-type', type);
    }
    document.head.appendChild(schemaScript);
  }
  schemaScript.textContent = JSON.stringify(schemaMarkup);
}

export default SEOMeta;
