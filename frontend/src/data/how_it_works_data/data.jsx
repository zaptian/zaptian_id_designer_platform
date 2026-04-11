import {
  LayoutTemplate,
  Upload,
  Eye,
  Printer,
  QrCode,
  Zap,
  GraduationCap,
  Building2,
  Calendar,
} from "../../assets/icons";

export const howItWorksData = {
  hero: {
    badge: "Process",
    title: "Simple. Fast. Professional.",
    subtitle:
      "From zero to verified IDs in 4 simple steps. No design skills needed.",
  },
  processHeadline: {
    title: "Step-by-Step Process",
    description:
      "Follow these four simple steps to create, generate, and print your professional ID cards.",
  },
  steps: [
    {
      id: 1,
      title: "Choose or Create a Design",
      description:
        "Start with a ready-to-use template or create your own ID card from scratch. Customize text, images, colors, logos, and layout using the drag-and-drop editor.",
      icon: <LayoutTemplate size={28} className="text-button-primary  group-hover:text-button-primary-text" />,
    },
    {
      id: 2,
      title: "Add Your Data",
      description:
        "Enter details manually for single cards or upload a CSV/Excel file to generate multiple ID cards at once.",
      icon: <Upload size={28} className="text-button-primary group-hover:text-button-primary-text" />,
    },
    {
      id: 3,
      title: "Generate & Preview",
      description:
        "Zaptian automatically fills each ID with your data. Preview all cards before exporting to ensure everything looks correct.",
      icon: <Eye size={28} className="text-button-primary group-hover:text-button-primary-text" />,
    },
    {
      id: 4,
      title: "Export & Print",
      description:
        "Download your ID cards as high-quality PDF or image files. Print them or share digitally as needed.",
      icon: <Printer size={28} className="text-button-primary group-hover:text-button-primary-text" />,
    },
  ],
  optional: {
    title: "Optional: QR & Barcode Usage",
    description:
      "Add QR codes or barcodes to your ID cards to link them with external systems, customer records, or internal tracking.",
    icon: <QrCode size={28} className="text-button-primary " />,
  },
  workflows: {
    title: "Supported Workflows",
    items: [
      {
        title: "Employee ID Creation",
        description:
          "Add employee details → generate ID cards → export and print",
        icon: <Zap size={24} className="text-button-primary" />,
      },
      {
        title: "Student ID Generation",
        description:
          "Upload student data → create bulk IDs → print for distribution",
        icon: <GraduationCap size={24} className="text-button-primary" />,
      },
      {
        title: "Membership Cards",
        description:
          "Design once → generate for all members → use for identification or tracking",
        icon: <Building2 size={24} className="text-button-primary" />,
      },
      {
        title: "Event Badges",
        description:
          "Create event designs → generate attendee badges → print or share digitally",
        icon: <Calendar size={24} className="text-button-primary" />,
      },
    ],
  },
};
