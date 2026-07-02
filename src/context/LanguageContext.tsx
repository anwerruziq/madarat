import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "ar" | "en";

export const translations = {
  ar: {
    dir: "rtl",
    // Navbar
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "مشاريعنا",
      contact: "تواصل معنا",
      cta: "استشارة مجانية",
    },
    // Hero
    hero: {
      title: "مدارات التنفيذ",
      subtitle: "شركة صناعية ومقاولات عامة",
      desc: "نقدم حلول متكاملة تشمل التصنيع، الإنشاءات، التوريد، والتنفيذ باحترافية وجودة عالية",
      cta1: "تواصل معنا",
      cta2: "اكتشف خدماتنا",
    },
    // About
    about: {
      label: "من نحن",
      title: "نبذة عامة عن",
      titleHighlight: "مدارات التنفيذ",
      p1: "مدارات التنفيذ شركة متخصصة في الأعمال الصناعية والمقاولات العامة، تقدم حلول متكاملة تشمل التصنيع، الإنشاءات، التوريد، والتنفيذ باحترافية وجودة عالية، مع الالتزام بمعايير السلامة والكفاءة التشغيلية.",
      p2: "تأسست الشركة انطلاقاً من رؤية طموحة لتقديم خدمات صناعية ومقاولات عالية الجودة تلبي احتياجات السوق المحلي وتواكب التطور المتسارع في قطاع الأعمال بالمملكة العربية السعودية، للمساهمة في تحقيق رؤية المملكة 2030.",
      facts: [
        { label: "النشاط", value: "صناعية ومقاولات" },
        { label: "المقر الرئيسي", value: "الرياض - حي السلي" },
        { label: "سنة التأسيس", value: "2022" },
        { label: "خبرة الشركة", value: "5 سنوات" },
      ],
      foundingStory: "قصة التأسيس",
      foundingDesc: "بدأت الشركة بخبرة عملية وفهم عميق لمتطلبات العملاء مع التركيز على الجودة والالتزام والموثوقية في تنفيذ المشاريع.",
      values: [
        { title: "الرؤية", desc: "أن نكون من الشركات الرائدة في قطاع الصناعة والمقاولات من خلال تقديم حلول مبتكرة وجودة عالية تسهم في التنمية المستدامة." },
        { title: "الرسالة", desc: "تقديم خدمات صناعية ومقاولات متكاملة بمعايير احترافية عالية تواكب تطور السوق وتلبي احتياجات العملاء بكفاءة وموثوقية." },
        { title: "الجودة والسلامة", desc: "الالتزام بأعلى معايير الجودة والسلامة في جميع مراحل العمل من التصنيع وحتى التسليم." },
        { title: "السرعة والكفاءة", desc: "سرعة الإنجاز والالتزام بالمواعيد، بفضل فريق عمل مؤهل وخبرة عملية، ومرونة في تلبية الاحتياجات." },
      ],
    },
    // Services
    services: {
      label: "خدماتنا",
      title: "نقدم لك الحلول",
      titleHighlight: "الصناعية المتكاملة",
      desc: "نقدم مجموعة شاملة من الخدمات الصناعية والمقاولات والتوريد لتلبية كافة احتياجات مشاريعك بأعلى معايير الجودة والاحترافية.",
      requestService: "طلب الخدمة",
      items: [
        {
          title: "التصنيع الصناعي والمعدني",
          desc: "تصنيع هياكل المقطورات، التركيبات والتجهيزات المعدنية، صيانة وإصلاح الهياكل المعدنية، وحلول صناعية متكاملة حسب الطلب.",
          features: ["هياكل المقطورات", "تجهيزات معدنية", "صيانة وإصلاح"],
        },
        {
          title: "المقاولات والإنشاءات",
          desc: "المقاولات العامة للمشاريع السكنية، التجارية، والصناعية مع إدارة وتنفيذ المشاريع باحترافية.",
          features: ["مشاريع سكنية", "مشاريع تجارية", "إدارة المشاريع"],
        },
        {
          title: "التشطيبات والتجهيزات",
          desc: "تنفيذ أعمال التشطيبات الداخلية والخارجية بأعلى مستويات الجودة.",
          features: ["تشطيبات داخلية", "تشطيبات خارجية", "دقة في التنفيذ"],
        },
        {
          title: "التوريد والإمداد",
          desc: "توريد المواد والمعدات وتقديم خدمات الإمدادات والدعم اللوجستي لضمان سير العمل بكفاءة.",
          features: ["توريد مواد", "دعم لوجستي", "معدات صناعية"],
        },
      ],
    },
    // Stats
    stats: {
      label: "إنجازاتنا بالأرقام",
      title: "أرقام تتحدث",
      titleHighlight: "عن نجاحنا",
      items: [
        { label: "سنة من الخبرة", desc: "خبرة متراكمة في القطاع المالي" },
        { label: "عميل راضٍ", desc: "مؤسسات وشركات نثق بها" },
        { label: "خبير مالي", desc: "فريق من الخبراء المعتمدين" },
        { label: "دقة وشفافية", desc: "نلتزم بأعلى المعايير المهنية" },
      ],
    },
    // Projects
    projects: {
      label: "إنجازاتنا",
      title: "أبرز",
      titleHighlight: "الأعمال والإنجازات",
      desc: "سجل حافل من الإنجازات التي تعكس التزامنا بتقديم خدمات مهنية بأعلى معايير الجودة لعملائنا في مختلف القطاعات.",
      filters: ["الكل", "إنجازات", "التصنيع", "التشطيبات", "التوريد"],
      ctaText: "هل تريد الاطلاع على المزيد من منتجاتنا وإنجازاتنا؟",
      ctaBtn: "تواصل معنا لمعرفة المزيد",
      items: [
        { title: "بناء علاقات قوية", category: "إنجازات", desc: "بناء علاقات قوية ومستدامة مع العملاء والموردين لضمان استمرارية النجاح.", tags: ["علاقات", "عملاء", "موردين"] },
        { title: "إنجاز التشطيبات", category: "التشطيبات", desc: "إنجاز أعمال التشطيبات والتجهيزات باحترافية عالية وتسليم في الوقت المحدد.", tags: ["تشطيبات", "احترافية", "تجهيزات"] },
        { title: "مشاريع الإمدادات", category: "التوريد", desc: "المساهمة الفعالة في مشاريع الإمدادات والتوريد لضمان تدفق المواد بسلاسة.", tags: ["إمدادات", "توريد", "لوجستيات"] },
        { title: "هياكل المقطورات", category: "التصنيع", desc: "تنفيذ وتصنيع هياكل المقطورات وفق أعلى المواصفات الفنية ومعايير الجودة.", tags: ["تصنيع", "مقطورات", "جودة"] },
        { title: "حلول متكاملة", category: "إنجازات", desc: "تقديم حلول متكاملة للمشاريع بدءاً من التخطيط وحتى التنفيذ والتسليم.", tags: ["حلول", "مشاريع", "تنفيذ"] },
        { title: "دعم المشاريع", category: "التوريد", desc: "دعم المشاريع بالمواد والخدمات التشغيلية لضمان كفاءة الإنتاج.", tags: ["دعم", "تشغيل", "مواد"] },
      ],
    },
    // Contact
    contact: {
      label: "تواصل معنا",
      title: "نحن هنا لخدمة",
      titleHighlight: "أعمالك",
      desc: "تواصل مع فريق الخبراء لدينا للحصول على استشارة مالية أو ضريبية مخصصة لاحتياجات شركتك.",
      infoTitle: "معلومات التواصل",
      followUs: "تابعنا على",
      formTitle: "طلب استشارة",
      fields: {
        name: "الاسم الكامل *",
        namePlaceholder: "اسمك الكريم",
        company: "اسم الشركة",
        companyPlaceholder: "الشركة...",
        phone: "رقم الجوال *",
        phonePlaceholder: "+966 5X XXX XXXX",
        email: "البريد الإلكتروني",
        emailPlaceholder: "email@company.com",
        service: "نوع الخدمة المطلوبة",
        serviceDefault: "اختر الخدمة...",
        serviceOptions: ["المحاسبة والمسك الدفتري", "المراجعة والتدقيق", "الاستشارات الزكوية والضريبية", "الاستشارات المالية", "دراسات الجدوى", "أخرى"],
        message: "تفاصيل الاستشارة *",
        messagePlaceholder: "اكتب وصفاً مختصراً لمتطلباتك...",
        submit: "إرسال الطلب",
      },
      successTitle: "تم إرسال طلبك بنجاح!",
      successDesc: "شكراً لتواصلك معنا. سيتواصل معك أحد مستشارينا قريباً.",
      infoItems: [
        { title: "المقر الرئيسي", lines: ["طريق الملك فهد، الرياض", "المملكة العربية السعودية"] },
        { title: "اتصل بنا", lines: ["+966 11 XXX XXXX", "+966 50 XXX XXXX"] },
        { title: "البريد الإلكتروني", lines: ["info@madarat-ex.com", "consulting@madarat-ex.com"] },
        { title: "ساعات العمل", lines: ["الأحد — الخميس", "08:00 صباحاً — 05:00 مساءً"] },
      ],
    },
    // Footer
    footer: {
      desc: "شريكك الموثوق في تقديم حلول المحاسبة والاستشارات المالية المتكاملة بأعلى معايير الجودة والكفاءة.",
      company: "الشركة",
      companyLinks: ["من نحن", "رؤيتنا ورسالتنا", "فريقنا", "الشهادات والاعتمادات"],
      services: "خدماتنا",
      servicesLinks: ["الاستشارات المالية", "التدقيق والمراجعة", "الاستشارات الضريبية", "دراسات الجدوى", "إدارة المخاطر"],
      legal: "قانوني",
      legalLinks: ["سياسة الخصوصية", "الشروط والأحكام", "إخلاء المسؤولية"],
      location: "الموقع",
      locationText: "طريق الملك فهد، الرياض\nالمملكة العربية السعودية\nص.ب 12345",
      newsletterTitle: "ابقَ على اطلاع بآخر التحديثات المالية",
      newsletterDesc: "اشترك في نشرتنا البريدية لتصلك أحدث الرؤى والتقارير",
      emailPlaceholder: "بريدك الإلكتروني...",
      subscribe: "اشترك",
      copyright: "مدارات التنفيذ للاستشارات. جميع الحقوق محفوظة.",
      license: "ترخيص مهني رقم: 1010XXXXXX",
    },
  },
  en: {
    dir: "ltr",
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      contact: "Contact Us",
      cta: "Free Consultation",
    },
    // Hero
    hero: {
      title: "Madarat Al-Tanfeedh",
      subtitle: "Industrial & General Contracting Company",
      desc: "Providing integrated solutions including manufacturing, construction, and supply with high quality and professionalism",
      cta1: "Contact Us",
      cta2: "Explore Services",
    },
    // About
    about: {
      label: "About Us",
      title: "Overview of",
      titleHighlight: "Madarat Al-Tanfeedh",
      p1: "Madarat Al-Tanfeedh is a specialized company in industrial works and general contracting, offering integrated solutions including manufacturing, construction, supply, and execution with professionalism and high quality, adhering to safety and operational efficiency standards.",
      p2: "The company was founded with an ambitious vision to provide high-quality industrial and contracting services that meet local market needs and keep pace with the rapid development in the Saudi business sector, contributing to the realization of Vision 2030.",
      facts: [
        { label: "Activity", value: "Industrial & Contracting" },
        { label: "Headquarters", value: "Riyadh - Al-Saly District" },
        { label: "Founded", value: "2022" },
        { label: "Experience", value: "5 Years" },
      ],
      foundingStory: "Founding Story",
      foundingDesc: "The company started with practical experience and deep understanding of client requirements with a focus on quality, commitment, and reliability in project execution.",
      values: [
        { title: "Vision", desc: "To become one of the leading companies in the industrial and contracting sector by providing innovative solutions and high quality contributing to sustainable development." },
        { title: "Mission", desc: "Providing integrated industrial and contracting services with high professional standards that keep pace with market evolution and meet client needs efficiently and reliably." },
        { title: "Quality & Safety", desc: "Adhering to the highest quality and safety standards throughout all stages of work from manufacturing to delivery." },
        { title: "Speed & Efficiency", desc: "Rapid accomplishment and commitment to deadlines, thanks to a qualified team with practical experience and flexibility in meeting needs." },
      ],
    },
    // Services
    services: {
      label: "Our Services",
      title: "Providing Integrated",
      titleHighlight: "Industrial Solutions",
      desc: "We provide a comprehensive range of industrial, contracting, and supply services to meet all your project needs with the highest standards of quality and professionalism.",
      requestService: "Request Service",
      items: [
        {
          title: "Industrial & Metallic Manufacturing",
          desc: "Manufacturing trailer frames, metal fittings, maintenance and repair of metal structures, and custom integrated industrial solutions.",
          features: ["Trailer Frames", "Metal Fittings", "Maintenance"],
        },
        {
          title: "Contracting & Construction",
          desc: "General contracting for residential, commercial, and industrial projects with professional project management.",
          features: ["Residential", "Commercial", "Management"],
        },
        {
          title: "Finishes & Equipment",
          desc: "Execution of interior and exterior finishing works with the highest quality standards.",
          features: ["Interior", "Exterior", "Precision"],
        },
        {
          title: "Supply & Logistics",
          desc: "Supplying materials and equipment, and providing logistics support services to ensure efficient workflow.",
          features: ["Materials", "Logistics", "Equipment"],
        },
      ],
    },
    // Stats
    stats: {
      label: "Our Achievements in Numbers",
      title: "Numbers That Speak",
      titleHighlight: "For Our Success",
      items: [
        { label: "Years of Experience", desc: "Accumulated expertise in the financial sector" },
        { label: "Satisfied Clients", desc: "Institutions and companies we trust" },
        { label: "Financial Experts", desc: "A team of certified experts" },
        { label: "Accuracy & Transparency", desc: "We adhere to the highest professional standards" },
      ],
    },
    // Projects
    projects: {
      label: "Achievements",
      title: "Our Notable",
      titleHighlight: "Work & Achievements",
      desc: "A proven track record of achievements that reflects our commitment to providing professional services with the highest quality standards to our clients in various sectors.",
      filters: ["All", "Achievements", "Manufacturing", "Contracting", "Finishes", "Supply"],
      ctaText: "Want to see more of our products and achievements?",
      ctaBtn: "Contact us to learn more",
      items: [
        { title: "Strong Relationships", category: "Achievements", desc: "Building strong and sustainable relationships with clients and suppliers to ensure continued success.", tags: ["Relationships", "Clients", "Suppliers"] },
        { title: "Professional Finishes", category: "Finishes", desc: "Completing finishing and equipment works with high professionalism and on-time delivery.", tags: ["Finishes", "Professionalism", "Equipment"] },
        { title: "Supply Projects", category: "Supply", desc: "Active contribution to supply and logistics projects ensuring smooth material flow.", tags: ["Supply", "Logistics", "Flow"] },
        { title: "Trailer Frames", category: "Manufacturing", desc: "Manufacturing and executing trailer frames according to the highest technical specifications and quality standards.", tags: ["Manufacturing", "Trailers", "Quality"] },
        { title: "Integrated Solutions", category: "Achievements", desc: "Providing integrated solutions for projects from planning to execution and delivery.", tags: ["Solutions", "Projects", "Execution"] },
        { title: "Project Support", category: "Supply", desc: "Supporting projects with materials and operational services to ensure production efficiency.", tags: ["Support", "Operations", "Materials"] },
      ],
    },
    // Contact
    contact: {
      label: "Contact Us",
      title: "We Are Here to Serve",
      titleHighlight: "Your Business",
      desc: "Contact our team of experts for a customized financial or tax consultation tailored to your company's needs.",
      infoTitle: "Contact Information",
      followUs: "Follow Us On",
      formTitle: "Request a Consultation",
      fields: {
        name: "Full Name *",
        namePlaceholder: "Your Name",
        company: "Company Name",
        companyPlaceholder: "Company...",
        phone: "Phone Number *",
        phonePlaceholder: "+966 5X XXX XXXX",
        email: "Email Address",
        emailPlaceholder: "email@company.com",
        service: "Service Type Required",
        serviceDefault: "Choose service...",
        serviceOptions: ["Accounting & Bookkeeping", "Review & Auditing", "Zakat & Tax Advisory", "Financial Consulting", "Feasibility Studies", "Other"],
        message: "Consultation Details *",
        messagePlaceholder: "Write a brief description of your requirements...",
        submit: "Send Request",
      },
      successTitle: "Your request has been sent successfully!",
      successDesc: "Thank you for contacting us. One of our consultants will get in touch with you soon.",
      infoItems: [
        { title: "Headquarters", lines: ["King Fahd Road, Riyadh", "Kingdom of Saudi Arabia"] },
        { title: "Call Us", lines: ["+966 11 XXX XXXX", "+966 50 XXX XXXX"] },
        { title: "Email", lines: ["info@madarat-ex.com", "consulting@madarat-ex.com"] },
        { title: "Working Hours", lines: ["Sunday — Thursday", "08:00 AM — 05:00 PM"] },
      ],
    },
    // Footer
    footer: {
      desc: "Your trusted partner in providing integrated accounting and financial consulting solutions with the highest standards of quality and efficiency.",
      company: "Company",
      companyLinks: ["About Us", "Our Vision & Mission", "Our Team", "Certifications & Accreditations"],
      services: "Services",
      servicesLinks: ["Financial Consulting", "Auditing & Review", "Tax Advisory", "Feasibility Studies", "Risk Management"],
      legal: "Legal",
      legalLinks: ["Privacy Policy", "Terms & Conditions", "Disclaimer"],
      location: "Location",
      locationText: "King Fahd Road, Riyadh\nKingdom of Saudi Arabia\nP.O. Box 12345",
      newsletterTitle: "Stay Up to Date with the Latest Financial Updates",
      newsletterDesc: "Subscribe to our newsletter to receive the latest insights and reports",
      emailPlaceholder: "Your email...",
      subscribe: "Subscribe",
      copyright: "Madarat Al-Tanfeedh Consulting. All rights reserved.",
      license: "Professional License No: 1010XXXXXX",
    },
  },
};

type TranslationsType = typeof translations.ar;

interface LanguageContextType {
  lang: Lang;
  t: TranslationsType;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");
  const t = translations[lang];

  // Set initial dir on mount
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
  }, []);

  const toggleLang = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
    document.documentElement.setAttribute("dir", newLang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
