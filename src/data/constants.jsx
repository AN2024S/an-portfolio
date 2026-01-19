import React from 'react';
import { 
  Code2, Globe, Smartphone, Database, ToolCase, Layers 
} from 'lucide-react';

// نصوص الواجهة العامة (UI Strings)
export const translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      projects: 'أعمالي',
      skills: 'المهارات',
      contact: 'التواصل',
    },
    hero: {
      title: "عبدالله نديش",
      sub: "مطور واجهات برمجية وتطبيقات أندرويد متكاملة، شغوف بتحويل الأفكار المعقدة إلى تجارب رقمية بسيطة ومبتكرة.",
      cvBtn: "تحميل السيرة الذاتية",
      viewWork: "استعرض أعمالي"
    },
    skills: {
      title: "القدرات",
      subtitle: "التقنية"
    },
    projects: {
      title: "أبرز",
      subtitle: "المشاريع",
      problem: "التحدي:",
      solution: "الحل التقني:",
      tech: "التقنيات المستخدمة:",
      viewGallery: "تفاصيل من المشروع"
    },
    contact: {
      title: "لنحول فكرتك إلى واقع!",
      phone: "الهاتف",
      telegram: "تليجرام",
      email: "الايميل",
      whatsapp: "واتساب"
    }
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Portfolio',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      title: "Abdullah Nadeesh",
      sub: "Full-Stack Web & Android Developer, dedicated to transforming complex concepts into seamless and innovative digital experiences.",
      cvBtn: "Download CV",
      viewWork: "View Portfolio"
    },
    skills: {
      title: "Technical",
      subtitle: "skills"
    },
    projects: {
      title: "Featured",
      subtitle: "Work",
      problem: "The Challenge:",
      solution: "The Solution:",
      tech: "Tech Stack:",
      viewGallery: "Project Details"
    },
    contact: {
      title: "Let’s Build Something Great!",
      phone: "Phone",
      telegram: "Telegram",
      email: "Email",
      whatsapp: "WhatsApp"
    }
  }
};

export const skillCategories = (lang) => [
  { 
    title: lang === 'ar' ? "لغات البرمجة" : "Programming Languages", 
    skills: ["C#", "Java", "Dart", "Python"], 
    icon: <Code2 size={20}/> 
  },
  { 
    title: lang === 'ar' ? "تقنيات الويب" : "Web Technologies", 
    skills: ["React", "CSS", "HTML", "Django","JS"], 
    icon: <Globe size={20}/> 
  },
  { 
    title: lang === 'ar' ? "تطبيقات الموبايل" : "Mobile Apps", 
    skills: ["React Native","Flutter"], 
    icon: <Smartphone size={20}/> 
  },
  { 
    title: lang === 'ar' ? "قواعد البيانات" : "Databases", 
    skills: ["SQL Plus", "SQL Server", "MySQL", "MongoDB","PostgreSQL"], 
    icon: <Database size={20}/> 
  },
  { 
    title: lang === 'ar' ? "أدوات التطوير" : "Dev Tools", 
    skills: ["Git", "GitHub", "VS Code", "Figma","Postman"], 
    icon: <ToolCase size={20}/> 
  },
  { 
    title: lang === 'ar' ? " مهارات أخرى" : "Other Skills", 
    skills: ["Code Quality","RESTful APIs","Kafka", "Docker", "Soft Skills"], 
    icon: <ToolCase size={20}/> 
  },
];

export const projectData = (lang) => [
  {
    id: 1,
    tagIcon: <Layers size={20} />, 
    title: lang === 'ar' ? "بذرة وحصاد" : "Seed & Harvest",
    desc: lang === 'ar' ? "نظام زراعي ذكي لربط المزارعين بالتجار وتصنيف التربة بالذكاء الاصطناعي." : "Smart agricultural system connecting farmers to traders with AI soil classification.",
    techStack: ["AI", "Flutter", "Api", "Django"],
    problem: lang === 'ar' ? "صعوبة وصول المزارعين للأسواق المباشرة وعدم معرفة مواعيد الري والتسميد المنتظم." : "Difficulty for farmers to reach direct markets and lack of knowledge about irrigation schedules.",
    solution: lang === 'ar' ? "تطوير نظام متكامل بـ Django API وتطبيق Flutter قام بحل جميع المشاكل." : "Developed a complete system with Django API and Flutter app that solved all issues.",
    codeSnippet: "class PlantForm(forms.ModelForm):\n    class Meta:\n        model = Plants\n        fields = ['category', 'plant_name', 'water_requirement', 'fertilizer_requirement']",
    image: "/images/seed1.png",
    codeImg: "/images/seed2.png"
  },
  {
    id: 2,
    tagIcon: <Smartphone size={20} />,
    title: lang === 'ar' ? "موقع لخدمات السيارات" : "Car Services Site",
    desc: lang === 'ar' ? "يوفر كل ما تحتاجه سيارتك من تكنولوجيا وإكسسوارات في مكان واحد." : "Provides everything your car needs from technology to accessories in one place.",
    techStack: ["Api", "React"], 
    problem: lang === 'ar' ? "مع وجود الكثير من الأسواق يتشتت الزبون بأيهما يختار." : "With many markets, customers get distracted about which one to choose.",
    solution: lang === 'ar' ? "قمنا بتوفير جميع الإكسسوارات وتكنولوجيا السيارات في مكان واحد مع توفير الدعم الفني." : "Provided all accessories and car tech in one place with technical support.",
    codeSnippet: "const Services = () => {\n  const { setSelectedService } = useAppContext();\n  const [activeCategory, setActiveCategory] = useState('all');",
    image: "/images/car1.png",
    codeImg: "/images/cars.jpg"
  },
  {
    id: 3,
    tagIcon: <Smartphone size={20} />,
    title: lang === 'ar' ? "تطبيق تعليمي" : "Educational App",
    desc: lang === 'ar' ? "تطبيق تعليمي مجاني يهدف إلى مساعدة الطلاب في الوصول إلى المواد الدراسية بسهولة." : "Free educational app aiming to help students access study materials easily.",
    techStack: ["GetX", "Flutter"], 
    problem: lang === 'ar' ? "تشتت الملفات الدراسية وعدم وجود وسيلة تقييم سريعة للطلاب." : "Scattered study files and lack of quick assessment methods for students.",
    solution: lang === 'ar' ? "تطبيق موبايل يوفر جميع الملازم والملخصات ونماذج الاختبارات." : "Mobile app providing all summaries, materials, and test samples.",
    codeSnippet: "class HomeScreen extends StatefulWidget{\n  const HomeScreen({super.key});\n  @override\n  State<HomeScreen> createState() => _HomeScreenState();\n}",
    image: "/images/level1.png",
    codeImg: "/images/level2.png"
  }
];