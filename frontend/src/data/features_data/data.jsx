import { 
  Wand2, 
  LayoutTemplate, 
  Palette, 
  Move, 
  FileSpreadsheet, 
  Layers, 
  PenLine, 
  QrCode, 
  Barcode, 
  Printer, 
  ImageIcon, 
  ScanLine, 
  Save, 
  FolderTree,
} from "../../assets/icons";

export const featuresData = {
  hero: {
    badge: "Features",
    title: "Powerful tools to design and generate ID cards with ease.",
    sub_title: "Everything you need to create, manage, and scale your ID card operations securely from a single modern platform."
  },
  categories: [
    {
      title: "Design & Customization",
      description: "Everything you need to craft the perfect ID card design.",
      features: [
        {
          title: "Drag-and-Drop Editor",
          description: "Create ID cards visually with an easy-to-use canvas. Add text, images, logos, QR codes, and shapes.",
          icon: <Wand2 size={24} className="text-button-primary" />
        },
        {
          title: "Ready-to-use templates",
          description: "Start quickly with pre-designed templates for business, education, retail, and events.",
          icon: <LayoutTemplate size={24} className="text-button-primary" />
        },
        {
          title: "Custom branding",
          description: "Apply your logo, colors, and layout to match your organization’s identity.",
          icon: <Palette size={24} className="text-button-primary" />
        },
        {
          title: "Flexible layouts",
          description: "Design cards with full control over positioning, spacing, and alignment.",
          icon: <Move size={24} className="text-button-primary" />
        }
      ]
    },
    {
      title: "Data & Bulk Generation",
      description: "Generate massive amounts of ID cards seamlessly.",
      features: [
        {
          title: "CSV / Excel import",
          description: "Upload data to generate multiple ID cards at once.",
          icon: <FileSpreadsheet size={24} className="text-button-primary" />
        },
        {
          title: "Bulk ID generation",
          description: "Create hundreds or thousands of ID cards in a single process.",
          icon: <Layers size={24} className="text-button-primary" />
        },
        {
          title: "Manual entry support",
          description: "Quickly create individual ID cards for small use cases.",
          icon: <PenLine size={24} className="text-button-primary" />
        }
      ]
    },
    {
      title: "QR & Barcode Support",
      description: "Connect your ID cards with the digital world.",
      features: [
        {
          title: "QR code Integration",
          description: "Add QR codes to link ID cards with external systems or data.",
          icon: <QrCode size={24} className="text-button-primary" />
        },
        {
          title: "Barcode support",
          description: "Include barcodes for identification, scanning, or internal tracking.",
          icon: <Barcode size={24} className="text-button-primary" />
        }
      ]
    },
    {
      title: "Export & Printing",
      description: "Get your designs out of the platform and onto real cards.",
      features: [
        {
          title: "Print-ready export",
          description: "Send print jobs to any connected printer from anywhere. Batch print thousands of cards.",
          icon: <Printer size={24} className="text-button-primary" />
        },
        {
          title: "Image export",
          description: "Export high-resolution bleed-ready PDFs for offset or digital printing.",
          icon: <ImageIcon size={24} className="text-button-primary" />
        },
        {
          title: "Standard print Layouts",
          description: "Optimized layouts for common ID card sizes and printing formats.",
          icon: <ScanLine size={24} className="text-button-primary" />
        }
      ]
    },
    {
      title: "Project & Template Management",
      description: "Stay perfectly organized, no matter how many templates you create.",
      features: [
        {
          title: "Save and reuse designs",
          description: "Store templates and reuse them for future ID generation.",
          icon: <Save size={24} className="text-button-primary" />
        },
        {
          title: "Manage ID sets",
          description: "Organize generated ID cards by project, group, or purpose.",
          icon: <FolderTree size={24} className="text-button-primary" />
        }
      ]
    }
  ]
};
