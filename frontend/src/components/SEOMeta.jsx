import { useEffect } from 'react';

const SEOMeta = ({ 
  title = "S.R. Electronics - Transformer Manufacturer | Rajesh Asthana | Delhi",
  description = "Leading transformer manufacturer in Delhi by Rajesh Asthana. Specializing in Control, Power, Distribution, Isolation & Auto Transformers. 20+ years experience, ISO certified.",
  keywords = "S.R. Electronics, SR Electronics, transformer manufacturer, control transformers, power transformers, distribution transformers, isolation transformers, auto transformers, Delhi",
  canonical = "https://www.srelectronics.store",
  ogImage = "/ogimage.jpeg",
  ogType = "website",
  schemaMarkup = null
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
      let schemaScript = document.querySelector('script[type="application/ld+json"]:last-of-type');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaMarkup);
    }
  }, [title, description, keywords, canonical, ogImage, ogType, schemaMarkup]);

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

export default SEOMeta;
