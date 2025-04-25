const BASE_URL =
  "https://8942-2a0a-a545-a45a-0-28bc-45eb-79d-b21b.ngrok-free.app";
const REDIRECT_URL =
  "https://test-api.service.hmrc.gov.uk/oauth/authorize?response_type=code&client_id=U9Qde8rNrra4kB5QuogGBsnyeuj1&scope=read:self-assessment write:self-assessment&redirect_uri=https://tax-app-tan.vercel.app/access-detail";

const services = [
  {
    id: 1,
    name: "Artist",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
      "Business Rates",
      "Rent",
      "Gas/Electric/Water",
      "Repairs/Maintenance",
    ],
  },
  {
    id: 2,
    name: "Beauty and Personal Care Technician",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 3,
    name: "Childcare Provider",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 4,
    name: "Construction Industry Scheme (CIS)",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 5,
    name: "Creative Professional",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 6,
    name: "Delivery Driver",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 7,
    name: "E-commerce and online seller",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 8,
    name: "Entertainer",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 9,
    name: "Gardening or Landscaping",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 10,
    name: "Freelance/Consultants",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 11,
    name: "Gardening/ landscaping",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 12,
    name: "Health and Wellness Professional",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 13,
    name: "Hospitality Services",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 14,
    name: "Landlord",
    expenses: [
      "Insurance",
      "Council Tax",
      "Ground Rent",
      "Repairs/Maintenance",
      "Service Charges",
      "Legal, Management & Other professional fees",
      "Other expenses relating to letting of property",
      "Mortgage interest (residential property)",
      "Mortgage interest (commercial property)",
      "Domestic items",
      "Standard expense allowance",
    ],
  },
  {
    id: 15,
    name: "Musician",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 16,
    name: "Photographer",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 17,
    name: "Taxi Driver",
    expenses: [
      "MOT",
      "Servicing of Vehicle",
      "Taxi Licence fee",
      "Other Taxi licencing fee (i.e. Criminal Record Check)",
      "Vehicle Repairs",
      "Fuel",
      "Mileage",
      "Cleaning of vehicle",
      "Insurance",
      "Accountancy",
      "Other",
    ],
  },
  {
    id: 18,
    name: "Teacher/ private tutor",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 19,
    name: "Tradespeople/ skilled worker",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 20,
    name: "Writer",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
  {
    id: 21,
    name: "Other",
    expenses: [
      "Travel",
      "Hotel/Accomodation",
      "Insurance",
      "Advertising",
      "Equipment",
      "Software",
      "Computer/laptop/other IT accessories",
      "Telephone",
      "Accountancy",
      "Legal/Professional",
    ],
  },
];

const faqsArray = [
  {
    id: "1",
    question: "What is this app used for?",
    answer:
      "This software helps sole traders easily submit their self-assessment tax returns directly to HMRC. It streamlines the process by securely connecting to the HMRC's system via an API, allowing you to file your tax return with just a few simple steps. It also uses Stripe to securely accept payments for the services we provide.",
    selected: false,
  },
  {
    id: "2",
    question: "How do I get started?",
    answer:
      "Simply start from the Home Page and click on the Get Started button.",
    selected: false,
  },
  {
    id: "3",
    question: "Is my information safe?",
    answer:
      "Yes, your privacy and security are our top priorities. We use SSL encryption to protect your personal and financial data. The app connects securely to HMRC’s API and the app does not store your sensitive HMRC information. Payments are processed through Stripe, a trusted and secure payment gateway and are also not stored within ou app.",
    selected: false,
  },
  {
    id: "4",
    question: "How does the HMRC submission work?",
    answer:
      "Once you enter your income and expenses into the app, it will automatically calculate your tax liability. You will then be able to review the information before submitting it directly to HMRC via the HMRC API. The app will provide confirmation once your tax return has been successfully filed with HMRC.",
    selected: false,
  },
  {
    id: "7",
    question: "How do I pay for the service?",
    answer:
      "We use Stripe to securely process payments for the service. Once you’ve completed your tax return and are ready to submit, you can make a payment through the app. Simply follow the prompts, and you’ll be directed to a secure payment page.",
    selected: false,
  },
  {
    id: "13",
    question: "How often should I submit a tax return?",
    answer:
      "In the UK, sole traders are required to submit a self-assessment tax return to HMRC once a year. The tax year typically runs from April 6th to April 5th, and your return is due by January 31st of the following year. TIf you have created an account with the app, we will send you a reminder email before the deadline, so you don’t have to worry about forgetting.",
    selected: false,
  },
  {
    id: "5",
    question: "Can I submit my tax return if I have multiple income streams?",
    answer:
      "Yes! Our app allows you to input multiple sources of income, including self-employment, rental income, and other forms of taxable income. You can also input allowable business expenses for each income stream to ensure you pay the correct amount of tax.",
    selected: false,
  },
  {
    id: "6",
    question: "What information do I need to file my tax return?",
    answer:
      "You will need the following information: Income details (e.g., invoices, sales receipts, or payslips), allowable business expenses (e.g., receipts for equipment, office supplies, or travel), and your HMRC login and National Insurance Number (NINO).",
    selected: false,
  },

  {
    id: "8",
    question: "Do I need an accountant to use this app?",
    answer:
      "No, you do not need an accountant to use the app. The app is designed for sole traders to easily complete and submit their self-assessment tax return on their own. However, if you’re unsure about any details or need expert advice, you can always contact us and/or consult with an accountant.",
    selected: false,
  },
  {
    id: "9",
    question: "Will I receive confirmation after submitting my tax return?",
    answer:
      "Yes! After submitting your tax return through the app, you will receive an immediate confirmation from HMRC. We will also send you a confirmation email with a copy of your submission for your records.",
    selected: false,
  },
  {
    id: "10",
    question: "What if I make a mistake on my tax return?",
    answer:
      "If you notice an error after submitting your tax return, you can file an amendment directly through the app. We’ll guide you through the process of updating your return and submitting the corrections to HMRC. If you need any help, our support team is available to assist.",
    selected: false,
  },
  {
    id: "11",
    question: "What happens if I miss the tax return deadline?",
    answer:
      "If you miss the deadline for filing your tax return, you may face penalties or interest charges from HMRC. However, our app allows you to submit your return as early as possible, so you can avoid missing the deadline. We recommend filing your return as soon as you’re ready to avoid any late fees.",
    selected: false,
  },
  {
    id: "12",
    question: "What should I do if I have a problem with the app?",
    answer:
      "If you encounter any issues or have any questions, our customer support team is here to help! You can reach us via the contact section within the app, or you can contact us directly at support@taxreadyuk.com. We’ll make sure to assist you as quickly as possible.",
    selected: false,
  },

  {
    id: "14",
    question: "Can I use this app for other types of taxes (e.g., VAT)?",
    answer:
      "Currently, the app is designed specifically for self-assessment tax returns for sole traders. However, we are constantly improving the app and may add additional tax services in the future. Stay tuned for updates!",
    selected: false,
  },
  {
    id: "15",
    question: "Have more questions?",
    answer:
      "f you still have questions, feel free to reach out to us at support@taxready.co.uk",
    selected: false,
  },
];

const infoArray = [
  {
    name: "Accountancy",
    info: "You can put down the cost of this App!!",
  },
  {
    name: "Advertising",
    info: "Have you made any leaflets or advertised on google/facebook/tiktok etc to tell people about your business",
  },
  {
    name: "Cleaning of vehicle",
    info: "If you use a vehicle for business purposes only then you can claim the cost of cleaning it",
  },
  {
    name: "Computer/ laptop/ other IT accessories",
    info: "These are items you need to run your business",
  },
  {
    name: "Domestic items",
    info: "Did you replace any domestic items (i.e. washing machine, dishwasher)",
  },
  {
    name: "Equipment",
    info: "Did you have to buy any tools or a desk or a desk lamp etc to do your work",
  },
  {
    name: "Fuel",
    info: "use your fuel receipts if you have a company vehicle (this only for business use)",
  },
  {
    name: "Gas/Electric/Water",
    info: "If you run your business from dedictated business premises",
  },
  {
    name: "Hotel/Accomodation",
    info: "If you have to travel and stay in a hotel or other accomodation",
  },
  {
    name: "Standard expense allowance",
    info: "If no expenses at all then can claim a standard £1,000 expense allowance without any receipts",
  },
  {
    name: "Insurance",
    info: "Business insurance only for your vehicle and/or business",
  },
  {
    name: "Mileage",
    info: "If you use a personal vehicle for your business, just enter the number of miles or KM you used for business (or if you an electric vehicle for business and do not have fuel receipts)",
  },
  {
    name: "Mortgage interest (commercial property)",
    info: "This is the interest element only and may not be the total mortgage payment.  If unsure please ask your mortgage provider for an interest certificate",
  },
  {
    name: "MOT",
    info: "For business vehicles only",
  },
  {
    name: "Repairs/Maintenance",
    info: "Did you have to repair anything in your business, i.e. broken plug socket or boiler",
  },
  {
    name: "Servicing of Vehicle",
    info: "For business vehicles",
  },
  {
    name: "Software",
    info: "for example microsoft, google etc",
  },
  {
    name: "Telephone",
    info: "business use only - if you use a personal telephone fo business and personal then only claim the business use percentage",
  },
  {
    name: "Travel",
    info: "Travel in relation to carrying out your business duties only, i.e train ticket, taxi fare",
  },
  {
    name: "Vehicle Repairs",
    info: "business vehicles only",
  },
  {
    name: "Other allowable business expenses",
    info: "Miscellaneous expenses that are wholly and exclusively for business purposes but don't fit into standard categories.",
  },
  {
    name: "Annual Investment Allowance",
    info: "Capital expenditure eligible for immediate tax relief.",
  },
  {
    name: "Business Premises Renovation Allowance",
    info: "Costs for renovating business premises in designated areas.",
  },
  {
    name: "Capital Allowance Main Pool",
    info: "Depreciation on general business assets.",
  },
  {
    name: "Capital Allowance Special Rate Pool",
    info: "Depreciation on assets with special rate allowances.",
  },
  {
    name: "Zero Emission Goods Vehicle Allowance",
    info: "Allowance for zero-emission goods vehicles.",
  },
  {
    name: "Enhanced Capital Allowance",
    info: "Allowance for energy-saving equipment.",
  },
  {
    name: "Allowance on Sales",
    info: "Adjustments related to the sale of assets.",
  },
  {
    name: "Balancing Charge",
    info: "Charge when the disposal value of an asset exceeds its tax written down value.",
  },
  {
    name: "Balancing Allowance",
    info: "Allowance when the disposal value of an asset is less than its tax written down value.",
  },
  {
    name: "Business Entertainment Costs",
    info: "Costs related to entertaining clients or customers.",
  },
  {
    name: "Disallowable Expenses",
    info: "Expenses not allowable for tax purposes.",
  },
  {
    name: "Other Capital Allowances",
    info: "Other capital allowances not specified above.",
  },
  {
    name: "Trading Income Allowance",
    info: "Allowance for trading income under a certain threshold.",
  },
  {
    name: "Training courses",
    info: "Costs for training courses related to your business, such as refresher courses or courses that maintain or update existing skills",
  },
  {
    name: "Clothing expenses",
    info: "Expenditure on uniforms or protective clothing necessary for your work. Note that everyday clothing, even if worn for work, is not allowable.",
  },
  {
    name: "Use of Home as Office",
    info: "A proportion of home expenses (e.g., heating, electricity, Council Tax, mortgage interest or rent, internet and telephone use) can be claimed if you work from home.",
  },
  {
    name: "Capital Allowances",
    info: "Costs for assets like equipment, machinery, or business vehicles that you keep to use in your business",
  },
];

export { BASE_URL, REDIRECT_URL, services, faqsArray, infoArray };
