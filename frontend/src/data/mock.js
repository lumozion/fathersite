// S.R. ELECTRONICS - Mock Data

export const heroData = {
  title: "S.R. ELECTRONICS",
  tagline: "Engineering Excellence in Power Control",
  ctaText: "Explore Our Range",
  backgroundImage: "images/front.jpeg"
};

export const navigationLinks = [
  { id: 1, label: "Craftsmanship", href: "#craftsmanship" },
  { id: 2, label: "Products", href: "#products" },
  { id: 3, label: "Engineering", href: "#engineering" },
  { id: 4, label: "About", href: "#about" },
  { id: 5, label: "Industries", href: "#industries" },
  { id: 6, label: "Contact", href: "#contact" }
];

export const craftsmanshipData = {
  title: "The Art of Precision",
  subtitle: "Every transformer we create is a testament to engineering excellence",
  description: "With decades of expertise, we craft control transformers that meet the most demanding specifications. Our commitment to quality is evident in every coil we wind, every connection we make.",
  images: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1738162837438-92ff852619a1",
      alt: "Precision laser cutting",
      caption: "Precision Manufacturing"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1585366958113-e28e8e580d3a",
      alt: "Quality inspection",
      caption: "Quality Inspection"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1455165814004-1126a7199f9b",
      alt: "Skilled craftsmanship",
      caption: "Expert Craftsmanship"
    }
  ]
};

export const productsData = {
  title: "Our Collection",
  subtitle: "Precision-engineered transformers for every application",
  products: [
    {
      id: 1,
      name: "Control Transformer Series CT",
      description: "Premium single-phase control transformers for industrial automation",
      image: "/control.jpeg",
      specs: {
        voltage: "230V - 440V",
        power: "50VA - 5000VA",
        frequency: "50/60 Hz"
      }
    },
    {
      id: 2,
      name: "Isolation Transformer Series IT",
      description: "High-isolation transformers for sensitive electronic equipment",
      image: "/isolation.jpeg",
      specs: {
        voltage: "110V - 440V",
        power: "100VA - 10000VA",
        frequency: "50/60 Hz"
      }
    },
    {
      id: 3,
      name: "Auto Transformer Series AT",
      description: "Efficient step-up/step-down autotransformers for voltage conversion",
      image: "/auto.jpeg",
      specs: {
        voltage: "110V - 440V",
        power: "500VA - 25000VA",
        frequency: "50/60 Hz"
      }
    }
  ]
};

export const engineeringData = {
  title: "Precision Engineering",
  subtitle: "Where science meets craftsmanship",
  features: [
    {
      id: 1,
      title: "Advanced Core Design",
      description: "Premium grain-oriented silicon steel cores for maximum efficiency and minimum losses"
    },
    {
      id: 2,
      title: "Superior Insulation",
      description: "Class H insulation systems rated for continuous operation at elevated temperatures"
    },
    {
      id: 3,
      title: "Precision Winding",
      description: "Computer-controlled winding ensures consistent quality and optimal performance"
    },
    {
      id: 4,
      title: "Rigorous Testing",
      description: "Every unit undergoes comprehensive testing including hi-pot, ratio, and IR tests"
    }
  ],
  image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9"
};

export const industriesData = {
  title: "Industries We Serve",
  subtitle: "Powering excellence across sectors",
  industries: [
    { id: 1, name: "Manufacturing", icon: "Factory" },
    { id: 2, name: "Automation", icon: "Cog" },
    { id: 3, name: "Healthcare", icon: "Activity" },
    { id: 4, name: "Energy", icon: "Zap" },
    { id: 5, name: "Infrastructure", icon: "Building" },
    { id: 6, name: "Telecommunications", icon: "Radio" }
  ]
};

export const contactData = {
  title: "Get in Touch",
  subtitle: "Let us engineer your power solution",
  address: "GI/107, 1st Floor Back Portion, Mayapuri Phase-II\nNew Delhi, India 110064",
  phone: "+91 9313618021",
  email: "info@srelectronics.store"
};

export const footerData = {
  companyName: "S.R. ELECTRONICS",
  tagline: "Engineering Excellence in Power Control",
  copyright: "© 2025 S.R. Electronics. All rights reserved.",
  links: [
    { id: 1, label: "Privacy Policy", href: "/privacy-policy" },
    { id: 2, label: "Terms of Service", href: "/terms-of-service" }
  ]
};
