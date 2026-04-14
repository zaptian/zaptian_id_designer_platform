export const contactData = {
  hero: {
    badge: "Contact Us",
    title: "We’re here to help",
  },
  intro: {
    title: "Get in Touch",
    description:
      "Have questions or need help getting started? Reach out to us and we’ll get back to you as soon as possible.",
  },
  channels: [
    {
      name: "General Inquiries",
      details: ["contact@zaptian.com", "+91-75-9871-5731"],
      icon: "MessageSquare",
    },
    {
      name: "Support",
      details: ["support@zaptian.com"],
      icon: "Headset",
    },
    {
      name: "Sales / Plans",
      details: ["sales@zaptian.com"],
      icon: "Briefcase",
    },
  ],
  location: {
    title: "Location",
    details: ["Based in India", "Operating online to support users everywhere"],
    icon: "MapPin",
  },
  form: {
    fields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Your full name",
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "you@company.com",
      },
      {
        name: "organization",
        label: "Organization",
        type: "text",
        placeholder: "Your company or school",
      },
      {
        name: "subject",
        label: "Subject",
        type: "select",
        options: ["General", "Support", "Sales", "Other"],
        placeholder: "How can we help?",
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Write your message here...",
        maxLength: 500,
      },
    ],
    submitText: "Send Message",
  },
};
