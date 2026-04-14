export const pricingData = {
  hero: {
    badge: "Pricing",
    title: "Simple and transparent pricing for every need",
    subtitle: "Start for free, upgrade when you need to scale your operations."
  },
  plans: [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Up to 20 IDs/month",
      features: [
        "Basic templates",
        "Drag-and-drop editor",
        "Manual data entry",
        "Basic support"
      ],
      buttonLabel: "Get Started",
      whats_include: "What's Included",
      isPopular: false
    },
    {
      name: "Standard",
      price: "₹4,499",
      period: "/ year",
      description: "Up to 2,000 IDs/month",
      features: [
        "All templates",
        "Full design editor",
        "CSV / Excel import",
        "Bulk ID generation",
        "PDF + image export",
        "Email Support"
      ],
      buttonLabel: "Choose Standard",
      whats_include: "What's Included",
      popular_text: "Most Popular",
      isPopular: true
    },
    {
      name: "Pro",
      price: "₹6,899",
      period: "/ year",
      description: "Up to 10,000 IDs/month",
      features: [
        "Unlimited templates",
        "Advanced bulk generation",
        "Manage multiple projects",
        "Priority processing for large batches",
        "Priority Email Support"
      ],
      buttonLabel: "Choose Pro",
      whats_include: "What's Included",
      isPopular: false
    },
    {
      name: "Business",
      price: "Custom",
      period: "",
      description: "Unlimited IDs",
      features: [
        "Unlimited ID generation",
        "Multi-user access",
        "Dedicated Support",
        "Custom Requirements Support"
      ],
      buttonLabel: "Contact Sales",
      whats_include: "What's Included",
      isPopular: false
    }
  ],
  billingNotes: {
    title: "Billing Notes",
    notes: [
      "All paid plans are billed annually",
      "Pricing is based on ID export usage",
      "Upgrade anytime as your needs grow",
      "Custom plans available for high-volume users"
    ]
  }
};
