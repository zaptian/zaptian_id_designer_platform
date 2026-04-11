import {
  Zap,
  Link,
  Scale,
  Building2,
  GraduationCap,
  Store,
  Calendar,
  Pipette,
  LayoutTemplate,
  QrCode,
  FileSpreadsheet,
  Download,
  Printer,
} from "../assets/icons";

export const homeData = {
  hero: {
    headline: "Design Professional ID Cards in Minutes",
    subHeadline:
      "Zaptian ID Designer helps businesses, schools, and shops create, customize, and print ID cards with ease — no design skills required.",
    primaryCta: { label: "Get Started ", path: "/get-started" },
    secondaryCta: { label: "Request Demo", path: "/request-demo" }, // routing to templates
  },

  valueProps: [
    {
      icon: <Zap size={28} />,
      title: "Fast & Easy",
      description:
        "Create ID cards in minutes using an intuitive drag-and-drop editor — no design experience needed.",
      bgClass: "bg-yellow-100 dark:bg-yellow-900/40",
      textClass: "text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: <Link size={28} />,
      title: "Smart & Connected",
      description:
        "Add QR codes and barcodes to link IDs with customer data, POS systems, or records.",
      bgClass: "bg-green-100 dark:bg-green-900/40",
      textClass: "text-green-600 dark:text-green-400",
    },
    {
      icon: <Scale size={28} />,
      title: "Built to Scale",
      description:
        "Design one or generate thousands using bulk import — perfect for real-world business needs.",
      bgClass: "bg-blue-100 dark:bg-blue-900/40",
      textClass: "text-blue-600 dark:text-blue-400",
    },
  ],

  solutions: {
    title: "Built for Every Industry", // Keeping title consistent with ui
    subtitle: "Tailored features to manage credentials your way.",
    items: [
      {
        icon: (
          <Building2 className="text-button-primary shrink-0 mt-1" size={26} />
        ),
        title: "Businesses",
        description:
          "Create employee ID cards, visitor badges, and internal access cards",
      },
      {
        icon: (
          <GraduationCap
            className="text-button-primary shrink-0 mt-1"
            size={26}
          />
        ),
        title: "Schools & Colleges",
        description: "Design student and staff IDs with photo and data support",
      },
      {
        icon: <Store className="text-button-primary shrink-0 mt-1" size={26} />,
        title: "Retail & POS",
        description:
          "Generate membership cards and loyalty IDs linked to your system",
      },
      {
        icon: (
          <Calendar className="text-button-primary shrink-0 mt-1" size={26} />
        ),
        title: "Events",
        description: "Create event badges, passes, and entry cards quickly",
      },
    ],
  },

  features: [
    {
      icon: <Pipette size={18} className="text-button-primary" />,
      label: "Drag-and-drop ID designer",
    },
    {
      icon: <LayoutTemplate size={18} className="text-button-primary" />,
      label: "Ready-to-use templates",
    },
    {
      icon: <QrCode size={18} className="text-button-primary" />,
      label: "QR & barcode support",
    },
    {
      icon: <FileSpreadsheet size={18} className="text-button-primary" />,
      label: "Bulk import (CSV/Excel)",
    },
    {
      icon: <Download size={18} className="text-button-primary" />,
      label: "High-quality export (PDF/PNG)",
    },
    {
      icon: <Printer size={18} className="text-button-primary" />,
      label: "Print-ready layouts",
    },
  ],

  testimonial: {
    quote:
      "We created hundreds of ID cards in just a few hours. The process is simple and fast.",
    author: "Retail Business Owner",
  },

  finalCta: {
    headline: "Start Designing Your ID Cards Today",
    subtext: "Create, customize, and export professional ID cards in minutes.",
    primaryCta: { label: "Start Designing Free", path: "/sign_up" },
    secondaryCta: { label: "Browse Templates", path: "/templates" },
  },
};
