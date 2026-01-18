import React from 'react';
import { 
  Code2, Globe, Smartphone, Database, ToolCase, Layers 
} from 'lucide-react';

export const navLinks = [
  { name: 'الرئيسية', id: 'home' },
  { name: 'أعمالي', id: 'projects' },
  { name: 'المهارات', id: 'skills' },
  { name: 'التواصل', id: 'contact' },
];

export const skillCategories = [
  { title: "لغات البرمجة", skills: ["#C", "Java", "Dart", "Python"], icon: <Code2 size={20}/> },
  { title: "تقنيات الويب", skills: ["React", "CSS", "HTML", "Django","JS"], icon: <Globe size={20}/> },
  { title: "تطبيقات الموبايل", skills: ["React Native","Flutter"], icon: <Smartphone size={20}/> },
  { title: "قواعد البيانات", skills: ["SQL Plus", "SQL Server", "MySQL", "MonogoDB","PostgreSQL"], icon: <Database size={20}/> },
  { title: "أدوات التطوير", skills: ["Git", "GitHub", "VS Code", "Figma","Postman"], icon: <ToolCase size={20}/> },
  { title: " مهارات اَخرى", skills: ["Code Quality","RESTful APIs","Kafka", "Docker", "Soft Skills"], icon: <ToolCase size={20}/> },
];

export const projectData = [
  {
    id: 1,
    tagIcon: <Layers size={20} />, 
    title: "بذرة وحصاد",
    desc: "نظام زراعي ذكي لربط المزارعين بالتجار وتصنيف التربة بالذكاء الاصطناعي.",
    techStack: ["AI", "Flutter", "Api", "Django"],
    problem: "صعوبة وصول المزارعين للأسواق المباشرة وعدم معرفة مواعيد الريء والتسميد المنتظم.",
    solution: "تطوير نظام متكامل بـ Django API وتطبيق Flutter قام بحل جميع المشاكل.",
    codeSnippet: "class PlantForm(forms.ModelForm):\n    class Meta:\n        model = Plants\n        fields = ['category', 'plant_name', 'water_requirement', 'fertilizer_requirement']",
    image: "/images/seed1.png",
    codeImg: "/images/seed2.png"
  },
  {
    id: 2,
    tagIcon: <Smartphone size={20} />,
    title: "موقع لخدمات السيارات",
    desc: "يوفر كل ما تحتاجه سيارتك من تكنولوجيا وإكسسوارات في مكان واحد.",
    techStack: ["Api", "React"], 
    problem: "مع وجود الكثير من الأسواق يتشتت الزبون بإيهما يختار.",
    solution: "قمنا بتوفير جميع الأكسسوارات وتكنولوجيا السيارات في مكان واحد مع توفير الدعم الفني.",
    codeSnippet: "const Services = () => {\n  const { setSelectedService } = useAppContext();\n  const [activeCategory, setActiveCategory] = useState('all');",
    image: "/images/car1.png",
    codeImg: "/images/cars.jpg"
  },
  {
    id: 3,
    tagIcon: <Smartphone size={20} />,
    title: "تطبيق تعليمي",
    desc: "تطبيق تعليمي مجاني يهدف الى مساعدة الطلاب في الوصول الى المواد الدراسية بسهولة.",
    techStack: ["GetX", "Flutter"], 
    problem: "تشتت الملفات الدراسية وعدم وجود وسيلة تقييم سريعة للطلاب.",
    solution: "تطبيق موبايل يوفر جميع الملازم والملخصات ونماذج الأختبارات.",
    codeSnippet: "class HomeScreen extends StatefulWidget{\n  const HomeScreen({super.key});\n  @override\n  State<HomeScreen> createState() => _HomeScreenState();\n}",
    image: "/images/level1.png",
    codeImg: "/images/level2.png"
  }
];