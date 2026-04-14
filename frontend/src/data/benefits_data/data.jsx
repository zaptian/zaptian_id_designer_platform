import { 
  Clock, 
  PiggyBank, 
  Workflow, 
  Layers, 
  Palette, 
  Briefcase, 
  XCircle, 
  CheckCircle2, 
  MousePointerClick, 
  UploadCloud, 
  Zap, 
  Printer 
} from "../../assets/icons";

export const benefitsData = {
  hero: {
    badge: "Benefits",
    title: "What Zaptian ID Designer helps you achieve",
    subtitle: "Focus on your business while we handle the complexity of ID card generation at scale."
  },
  benefitsList: [
    {
      title: "Save Time",
      description: "Create and generate ID cards in minutes instead of hours. Bulk generation eliminates repetitive manual work.",
      icon: <Clock size={28} className="text-button-primary" />
    },
    {
      title: "Reduce Costs",
      description: "Avoid external design expenses and reduce rework with ready-to-use templates and accurate previews.",
      icon: <PiggyBank size={28} className="text-button-primary" />
    },
    {
      title: "Simplify Your Workflow",
      description: "Design, update, and generate ID cards from a single platform gracefully.",
      icon: <Workflow size={28} className="text-button-primary" />
    },
    {
      title: "Handle Bulk with Ease",
      description: "Generate multiple ID cards effortlessly using CSV or Excel import.",
      icon: <Layers size={28} className="text-button-primary" />
    },
    {
      title: "Maintain Brand Consistency",
      description: "Use consistent templates, layouts, and branding across all ID cards seamlessly.",
      icon: <Palette size={28} className="text-button-primary" />
    },
    {
      title: "Flexible Use Cases",
      description: "Create ID cards for employees, students, memberships, and events.",
      icon: <Briefcase size={28} className="text-button-primary" />
    }
  ],
  comparison: {
    title: "Before vs After Zaptian",
    without: {
      title: "Without Zaptian ID Designer",
      icon: <XCircle size={22} className="text-red-500 mr-3 shrink-0" />,
      items: [
        "Manual design using complex tools",
        "Repetitive data entry",
        "Inconsistent layouts and branding",
        "Time-consuming bulk creation"
      ]
    },
    with: {
      title: "With Zaptian ID Designer",
      icon: <CheckCircle2 size={22} className="text-emerald-500 mr-3 shrink-0" />,
      items: [
        "Simple drag-and-drop design",
        "Bulk generation in minutes",
        "Consistent templates and layouts",
        "Quick export and print"
      ]
    }
  },
  howItWorks: {
    title: "How It Works",
    steps: [
      {
        title: "Choose or create template",
        description: "Start with an ID template visually.",
        icon: <MousePointerClick size={24} className="text-button-primary" />
      },
      {
        title: "Upload employee data",
        description: "Pull in spreadsheet data smoothly.",
        icon: <UploadCloud size={24} className="text-button-primary" />
      },
      {
        title: "Generate all in one go",
        description: "Map and create your bulk batch.",
        icon: <Zap size={24} className="text-button-primary" />
      },
      {
        title: "Export and print",
        description: "Print on the very same day.",
        icon: <Printer size={24} className="text-button-primary" />
      }
    ]
  },
  finalCta: {
    headline: "Start Designing Your ID Cards Today",
    subtext: "Create, customize, and export professional ID cards in minutes",
    primaryCta: { label: "Start Designing Free", path: "/sign_up" },
    secondaryCta: { label: "Browse Templates", path: "/sign_up" }
  }
};
