import { 
  PenTool, Database, DownloadCloud, QrCode, 
  LayoutList, Briefcase, GraduationCap, Store, 
  Calendar, Building, Zap, Layers, Cpu, Blocks, Sparkles 
} from "lucide-react";

export const productOverviewData = {
  hero: {
    badge: "Product Overview",
    title: "Everything you need to design and generate ID cards — in one place."
  },
  whatIsZaptian: {
    headline: "What is Zaptian?",
    description: "Zaptian ID Designer is a design tool that helps businesses, schools, and organizations create professional ID cards, generate them in bulk, and export them for print or digital use — all from a simple dashboard."
  },
  coreModules: {
    title: "Core Product Modules",
    items: [
      {
        title: "Design Studio",
        description: "Drag-and-drop editor to create ID cards with text, images, QR codes, and barcodes.",
        icon: <PenTool size={28} className="text-button-primary" />,
        colSpan: "md:col-span-2 lg:col-span-2"
      },
      {
        title: "Data Import",
        description: "Upload data using CSV or Excel to generate multiple ID cards instantly.",
        icon: <Database size={28} className="text-button-primary" />,
        colSpan: "md:col-span-2 lg:col-span-2"
      },
      {
        title: "Export & Print",
        description: "Download ID cards as high-quality PDF or image files, ready for printing.",
        icon: <DownloadCloud size={28} className="text-button-primary" />,
        colSpan: "md:col-span-1 lg:col-span-1"
      },
      {
        title: "QR & Barcode Support",
        description: "Add scannable QR codes or barcodes to connect IDs with your systems or records.",
        icon: <QrCode size={28} className="text-button-primary" />,
        colSpan: "md:col-span-2 lg:col-span-1"
      },
      {
        title: "Project Management",
        description: "Manage designs, templates, and generated ID sets in one place.",
        icon: <LayoutList size={28} className="text-button-primary" />,
        colSpan: "md:col-span-1 lg:col-span-2"
      }
    ]
  },
  whoIsItFor: {
    title: "Who Is It For?",
    subtitle: "Zaptian ID Designer is built for:",
    items: [
      { text: "Small and mid-size businesses", icon: <Briefcase size={20} className="text-button-primary/80" /> },
      { text: "Schools and colleges", icon: <GraduationCap size={20} className="text-button-primary/80" /> },
      { text: "Retail shops and POS users", icon: <Store size={20} className="text-button-primary/80" /> },
      { text: "Event organizers", icon: <Calendar size={20} className="text-button-primary/80" /> },
      { text: "Local organizations and institutions", icon: <Building size={20} className="text-button-primary/80" /> }
    ]
  },
  differentiators: {
    title: "Key Differentiators",
    items: [
      {
        title: "No-code design",
        description: "Create professional ID cards without any design experience.",
        icon: <Sparkles size={24} className="text-button-primary" />
      },
      {
        title: "Bulk generation made simple",
        description: "Generate hundreds or thousands of IDs using simple data import.",
        icon: <Layers size={24} className="text-button-primary" />
      },
      {
        title: "Practical and lightweight",
        description: "Focused on real-world use without unnecessary complexity.",
        icon: <Zap size={24} className="text-button-primary" />
      },
      {
        title: "Flexible usage",
        description: "Use for employees, students, memberships, events, and more.",
        icon: <Blocks size={24} className="text-button-primary" />
      },
      {
        title: "Built for integration",
        description: "Designed to work with POS systems, customer databases, and business tools.",
        icon: <Cpu size={24} className="text-button-primary" />
      }
    ]
  }
};
