export const partnerData = {
  hero: {
    badge: "Partners",
    title: "Grow with Zaptian ID Designer",
    subtitle: "Join our network of freelancers, providers, and agencies delivering secure identity solutions everywhere."
  },
  opportunities: {
    title: "Partnership Opportunities",
    items: [
      {
        name: "Reseller Partners",
        description: "Introduce Zaptian to your clients and help them create and manage ID cards more efficiently.",
        icon: "Briefcase"
      },
      {
        name: "Service Providers",
        description: "Offer ID card design, setup, and bulk generation services using Zaptian for your customers.",
        icon: "Settings"
      },
      {
        name: "Referral Partners",
        description: "Refer businesses, schools, or organizations and earn rewards for successful sign-ups.",
        icon: "Users"
      }
    ]
  },
  audience: {
    title: "Who Can Partner With Us",
    items: [
      "Freelancers and designers",
      "IT service providers",
      "Agencies and consultants",
      "Educational service providers"
    ]
  },
  benefits: {
    title: "Partner Benefits",
    items: [
      "Opportunity to earn through referrals or services",
      "Use Zaptian as part of your service offering",
      "Simple onboarding with no complex setup",
      "Ongoing support for getting started"
    ]
  },
  howItWorks: {
    title: "How It Works",
    steps: [
      { id: "01", text: "Reach out to us with your interest" },
      { id: "02", text: "We connect and understand your use case" },
      { id: "03", text: "Start referring or using Zaptian with your clients" }
    ]
  },
  form: {
    title: "Partner Inquiry Form",
    subtitle: "Submit your details below and our partnership team will reach out to schedule a discovery call.",
    submitText: "Submit Inquiry",
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true, placeholder: "John Doe" },
      { name: "email", label: "Email Address", type: "email", required: true, placeholder: "john@example.com" },
      { name: "phone", label: "Phone Number (Optional)", type: "tel", placeholder: "+1 (555) 000-0000" },
      { name: "organization", label: "Organization / Company Name", type: "text", required: true, placeholder: "Acme Corp" },
      { 
        name: "type", 
        label: "Partnership Type", 
        type: "select", 
        options: ["Reseller", "Service Provider", "Referral Partner", "Other"],
        required: true,
        placeholder: "Select Partnership Type"
      },
      { name: "role", label: "Your Role", type: "text", placeholder: "e.g., Freelancer, Agency Owner, Consultant", required: true },
      { 
        name: "industry", 
        label: "Industry (Optional)", 
        type: "select", 
        options: ["IT Services", "Education", "Events", "Design & Creative", "Other"],
        placeholder: "Select Industry"
      },
      { name: "website", label: "Website / Portfolio (Optional)", type: "text", placeholder: "https://yourwebsite.com" },
      { 
        name: "leads", 
        label: "Estimated Clients / Leads per Month (Optional)", 
        type: "select",
        options: ["1 - 10", "11 - 50", "51 - 200", "200+"],
        placeholder: "Select estimate"
      },
      { name: "plan", label: "How do you plan to work with Zaptian?", type: "textarea", required: true, placeholder: "Describe your partnership goals..." },
      { name: "notes", label: "Additional Notes (Optional)", type: "textarea", placeholder: "Any other details you'd like to share..." }
    ]
  }
};
