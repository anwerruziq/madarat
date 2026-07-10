import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "ar" | "en";

export const translations = {
  ar: {
    dir: "rtl",
    // Navbar
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      projects: "منتجاتنا",
      contact: "تواصل معنا",
      cta: "استشارة مجانية",
    },
    // Hero
    hero: {
      title: "مدارات التنفيذ",
      subtitle: "",
      desc: "نقدم حلول تصنيع وتشييد ومقاولات متكاملة للهياكل المعدنية والمقطورات والمعدات الصناعية والمنشآت بجودة عالية واحترافية تامة",
      cta1: "تواصل معنا",
      cta2: "اكتشف منتجاتنا",
    },
    // About
    about: {
      label: "من نحن",
      title: "نبذة عامة عن",
      titleHighlight: "مدارات التنفيذ",
      p1: "مدارات التنفيذ شركة متخصصة في التصنيع الصناعي والمقاولات، تقدم حلول متكاملة لتصنيع الهياكل المعدنية والمقطورات والمعدات الصناعية وتنفيذ المشاريع الإنشائية باحترافية وجودة عالية، مع الالتزام بمعايير السلامة والكفاءة التشغيلية.",
      p2: "تأسست الشركة انطلاقاً من رؤية طموحة لتقديم خدمات تصنيع صناعية ومقاولات عامة عالية الجودة تلبي احتياجات السوق المحلي وتواكب التطور المتسارع في قطاع الأعمال بالمملكة العربية السعودية، للمساهمة في تحقيق رؤية المملكة 2030.",

      vision: {
        title: "رؤيتنا",
        desc: "أن نكون الخيار الأول والشركة الرائدة في قطاع التصنيع الصناعي على مستوى المملكة، من خلال تقديم حلول مبتكرة تسهم في التنمية المستدامة، وبما يتماشى مع أهداف ومستهدفات رؤية المملكة 2030 في تعزيز المحتوى المحلي ودعم الصناعة الوطنية."
      },
      mission: {
        title: "رسالتنا",
        desc: "تقديم خدمات تصنيع صناعية متكاملة، إلى جانب تنفيذ أعمال المقاولات العامة وتوفير مواد البناء، بمعايير احترافية عالية تواكب تطور السوق وتلبي احتياجات العملاء بكفاءة وموثوقية."
      },
      values: [
        { title: "الجودة والسلامة", desc: "الالتزام بأعلى معايير الجودة والسلامة في جميع مراحل العمل من التصنيع وحتى التسليم." },
        { title: "السرعة والكفاءة", desc: "سرعة الإنجاز والالتزام بالمواعيد، بفضل فريق عمل مؤهل وخبرة عملية، ومرونة في تلبية الاحتياجات." },
      ],
    },
    // Services
    services: {
      label: "خدماتنا",
      title: "نقدم لك الحلول",
      titleHighlight: "الصناعية والمقاولاتية المتكاملة",
      desc: "نقدم مجموعة شاملة من خدمات التصنيع الصناعي والمقاولات والإنشاءات والتوريد لتلبية كافة احتياجات مشاريعك بأعلى معايير الجودة والاحترافية.",
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
        { label: "سنوات من الخبرة", desc: "خبرة متراكمة في التصنيع الصناعي" },
        { label: "عميل راضٍ", desc: "مؤسسات وشركات نثق بها" },
        { label: "دقة وشفافية", desc: "نلتزم بأعلى المعايير المهنية" },
      ],
    },
    // Products
    projects: {
      label: "منتجاتنا",
      title: "اكتشف",
      titleHighlight: "منتجاتنا",
      desc: "نقدم مجموعة متكاملة من المنتجات الصناعية عالية الجودة المصنّعة وفق أعلى المواصفات لتلبية احتياجات قطاع النقل والبناء.",
      ctaText: "هل تبحث عن منتج محدد أو تريد طلب كمية؟",
      ctaBtn: "تواصل معنا للحصول على عرض سعر",
      items: [
        { title: "سطحات نقل", category: "نقل", desc: "نصنع سطحات النقل بهياكل متينة وتصاميم عملية لتحمل الأعمال الشاقة، بكفاءة وجودة تصنيع عالية تلبي مختلف متطلبات النقل.", tags: ["نقل", "صلب", "بضائع ثقيلة"], image: "/çcc/IMG-20260708-WA0199.jpg" },
        { title: "هوابر قمح", category: "زراعة", desc: "نصنع هوابر القمح بهياكل متينة وتصاميم عملية تلبي متطلبات تخزين ونقل وتفريغ الحبوب بكفاءة، مع جودة تصنيع عالية تتحمل ظروف العمل الشاقة.", tags: ["قمح", "حبوب", "زراعة"], image: "/çcc/IMG-20260708-WA0200.jpg" },
        { title: "صناديق قلاب مربع او ملفوف", category: "إنشاءات", desc: "نصنع صناديق القلاب بهياكل متينة وتصاميم عملية تتحمل الأعمال الشاقة، مع جودة تصنيع عالية توفر الكفاءة والموثوقية في النقل والتفريغ.", tags: ["قلابات", "رمل", "إنشاءات"], image: "/çcc/IMG-20260708-WA0206.jpg" },
        { title: "سطحات لوبيد", category: "نقل", desc: "نصنع سطحات لوبيد بهياكل متينة وتصاميم عملية لنقل المعدات والآليات الثقيلة بكفاءة وأمان، مع جودة تصنيع عالية تتحمل ظروف العمل الشاقة.", tags: ["لوبيد", "حمولات ضخمة", "نقل"], image: "/çcc/IMG-20260708-WA0205.jpg" },
        { title: "سطحات ستائر بتصنيع متين وعملي", category: "نقل", desc: "نصنع سطحات الستائر بهياكل قوية وتصاميم عملية توفر الحماية والمرونة في نقل مختلف أنواع البضائع، بجودة تصنيع عالية تلبي متطلبات النقل والاستخدام الشاق.", tags: ["ستائر", "نقل", "بضائع"], image: "/çcc/IMG-20260708-WA0202.jpg" },
        { title: "صهاريج نقل مياه بجودة تصنيع عالية", category: "خزانات", desc: "نصنع صهاريج نقل المياه بمواصفات عالية وتصميم متين يلبي متطلبات النقل والاستخدام اليومي، مع الاهتمام بجودة التصنيع والكفاءة وطول العمر التشغيلي.", tags: ["خزانات", "مياه"], image: "/çcc/IMG-20260708-WA0201.jpg" },
        { title: "حاويات أنقاض بتصنيع قوي ومتين", category: "إنشاءات", desc: "نصنع حاويات الأنقاض بجودة عالية وهياكل متينة مصممة لتحمل الأعمال الشاقة، لتوفير كفاءة وموثوقية عالية في جمع ونقل مخلفات البناء والأنقاض.", tags: ["حاويات", "أنقاض", "إنشاءات"], image: "/çcc/IMG-20260708-WA0198.jpg" },
        { title: "ناقلات سيارات بتصنيع قوي واحترافي", category: "نقل", desc: "نصنع ناقلات السيارات بهياكل متينة وتصاميم عملية توفر الكفاءة والأمان في نقل المركبات، مع جودة تصنيع عالية تلبي متطلبات الاستخدام والعمل الشاق.", tags: ["سيارات", "مركبات", "نقل"], image: "/çcc/IMG-20260708-WA0204.jpg" },
        { title: "بستم هيدروليكي Hydrotip عالي الأداء", category: "هيدروليك", desc: "بستم هيدروليكي تلسكوبي مصمم لرفع القلابات بكفاءة وقوة، يتميز بالأداء الموثوق والمتانة العالية لتحمل ظروف العمل الشاقة والاستخدام المستمر.", tags: ["هيدروليك", "قلابات", "رفع"], image: "/çcc/IMG-20260708-WA0203.jpg" },
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
        { title: "المقر الرئيسي", lines: ["الرياض حي المشاعل", "المملكة العربية السعودية"] },
        { title: "اتصل بنا", lines: ["0534222044", "0533901113"] },
        { title: "البريد الإلكتروني", lines: ["admin@madarat-altanfeeth.com"] },
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
      locationText: "الرياض حي المشاعل\nالمملكة العربية السعودية",
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
      projects: "Products",
      contact: "Contact Us",
      cta: "Free Consultation",
    },
    // Hero
    hero: {
      title: "Madarat Al-Tanfeedh",
      subtitle: "",
      desc: "Providing integrated manufacturing, construction, and contracting solutions for metal structures, trailers, industrial equipment, and facilities with high quality and professionalism",
      cta1: "Contact Us",
      cta2: "Explore Our Products",
    },
    // About
    about: {
      label: "About Us",
      title: "Overview of",
      titleHighlight: "Madarat Al-Tanfeedh",
      p1: "Madarat Al-Tanfeedh is a specialized industrial manufacturing and contracting company, offering integrated solutions for manufacturing metal structures, trailers, industrial equipment, and executing construction projects with professionalism and high quality, adhering to safety and operational efficiency standards.",
      p2: "The company was founded with an ambitious vision to provide high-quality industrial manufacturing and general contracting services that meet local market needs and keep pace with the rapid development in the Saudi business sector, contributing to the realization of Vision 2030.",

      vision: {
        title: "Our Vision",
        desc: "To be the premier choice and leading company in the industrial manufacturing sector in the Kingdom, by providing innovative solutions that contribute to sustainable development, in full alignment with the goals of Saudi Vision 2030 to enhance local content and support national industry."
      },
      mission: {
        title: "Our Mission",
        desc: "Providing integrated industrial manufacturing services, alongside general contracting and building materials supply, with high professional standards that keep pace with market evolution and meet client needs efficiently and reliably."
      },
      values: [
        { title: "Quality & Safety", desc: "Adhering to the highest quality and safety standards throughout all stages of work from manufacturing to delivery." },
        { title: "Speed & Efficiency", desc: "Rapid accomplishment and commitment to deadlines, thanks to a qualified team with practical experience and flexibility in meeting needs." },
      ],
    },
    // Services
    services: {
      label: "Our Services",
      title: "Providing Integrated",
      titleHighlight: "Industrial & Contracting Solutions",
      desc: "We provide a comprehensive range of industrial manufacturing, contracting, construction, and supply services to meet all your project needs with the highest standards of quality and professionalism.",
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
        { label: "Years of Experience", desc: "Accumulated expertise in industrial manufacturing" },
        { label: "Satisfied Clients", desc: "Institutions and companies we trust" },
        { label: "Accuracy & Transparency", desc: "We adhere to the highest professional standards" },
      ],
    },
    // Products
    projects: {
      label: "Our Products",
      title: "Discover Our",
      titleHighlight: "Our Products",
      desc: "We offer a full range of high-quality industrial products manufactured to the highest specifications, meeting the demands of the transportation and construction sectors.",
      ctaText: "Looking for a specific product or need to place a bulk order?",
      ctaBtn: "Contact us for a price quote",
      items: [
        { title: "Flatbed Trailers", category: "Transport", desc: "We manufacture flatbed trailers with robust frames and practical designs to handle heavy-duty work, with high manufacturing efficiency and quality meeting various transport requirements.", tags: ["Transport", "Steel", "Heavy Load"], image: "/çcc/IMG-20260708-WA0199.jpg" },
        { title: "Grain Hoppers", category: "Agriculture", desc: "We manufacture grain hoppers with sturdy frames and practical designs that meet the requirements of storing, transporting, and unloading grain efficiently, with high manufacturing quality to withstand demanding work conditions.", tags: ["Wheat", "Grain", "Agriculture"], image: "/çcc/IMG-20260708-WA0200.jpg" },
        { title: "Square or Rolled Tipper Boxes", category: "Construction", desc: "We manufacture tipper boxes with sturdy frames and practical designs built for heavy-duty work, with high manufacturing quality providing efficiency and reliability in transport and unloading.", tags: ["Tippers", "Sand", "Construction"], image: "/çcc/IMG-20260708-WA0206.jpg" },
        { title: "Lowbed Trailers", category: "Transport", desc: "We manufacture lowbed trailers with sturdy frames and practical designs to transport heavy machinery and equipment efficiently and safely, with high manufacturing quality to withstand demanding work conditions.", tags: ["Lowbed", "Heavy Load", "Transport"], image: "/çcc/IMG-20260708-WA0205.jpg" },
        { title: "Curtain Side Trailers", category: "Transport", desc: "We manufacture curtain side trailers with strong frames and practical designs that provide protection and flexibility in transporting various types of cargo, with high manufacturing quality meeting demanding transport requirements.", tags: ["Curtain", "Transport", "Cargo"], image: "/çcc/IMG-20260708-WA0202.jpg" },
        { title: "Water Transport Tanks", category: "Tanks", desc: "We manufacture water transport tanks to high specifications with a robust design meeting daily transport and usage requirements, with attention to manufacturing quality, efficiency, and long operational life.", tags: ["Tanks", "Water"], image: "/çcc/IMG-20260708-WA0201.jpg" },
        { title: "Debris Containers", category: "Construction", desc: "We manufacture debris containers with high quality and sturdy frames designed to withstand heavy-duty work, providing high efficiency and reliability in collecting and transporting construction waste and debris.", tags: ["Containers", "Debris", "Construction"], image: "/çcc/IMG-20260708-WA0198.jpg" },
        { title: "Car Carriers", category: "Transport", desc: "We manufacture car carriers with sturdy frames and practical designs that provide efficiency and safety in transporting vehicles, with high manufacturing quality meeting demanding usage requirements.", tags: ["Cars", "Vehicles", "Transport"], image: "/çcc/IMG-20260708-WA0204.jpg" },
        { title: "Hydrotip Hydraulic System", category: "Hydraulic", desc: "A telescopic hydraulic system designed to lift tippers with efficiency and power, featuring reliable performance and high durability to withstand demanding work conditions and continuous use.", tags: ["Hydraulic", "Tippers", "Lifting"], image: "/çcc/IMG-20260708-WA0203.jpg" },
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
        { title: "Headquarters", lines: ["Riyadh, Al Masha'il District", "Kingdom of Saudi Arabia"] },
        { title: "Call Us", lines: ["0534222044", "0533901113"] },
        { title: "Email", lines: ["admin@madarat-altanfeeth.com"] },
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
