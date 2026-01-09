# FTSE Finance Website Configuration

## Project Information
- **Project Name**: FTSE Finance Website
- **Version**: 1.0.0
- **Last Updated**: 2026-01-02

## Deployment URLs
- **Main Website**: https://hwjvishtu3.skywork.website
- **Admin Dashboard**: https://u46pve8kd7.skywork.website

## Admin Credentials
- **Username**: admin
- **Password**: ftse2024

## Data Synchronization
The website uses localStorage for data synchronization between the admin dashboard and the main website:

### Storage Keys:
- `websiteContent_en` - English content
- `websiteContent_zh-CN` - Simplified Chinese content  
- `websiteContent_zh-TW` - Traditional Chinese content
- `enterpriseSubmissions` - IPO application submissions

### Content Structure:
```json
{
  "navHome": "Home",
  "navAbout": "About Us", 
  "navServices": "Services",
  "navContact": "Contact",
  "navEnterpriseForm": "Enterprise Form",
  "heroTitle": "FTSE FINANCE",
  "heroSubtitle": "US IPO & Market Cap Management Solutions",
  "heroDescription": "...",
  "heroCTAPrimary": "Get Started",
  "heroCTASecondary": "Learn More",
  "aboutTitle": "About FTSE Finance",
  "aboutDescription": "...",
  "aboutMissionTitle": "Our Mission",
  "aboutMissionDescription": "...",
  "aboutVisionTitle": "Our Vision", 
  "aboutVisionDescription": "...",
  "servicesTitle": "Our Services",
  "servicesIPOTitle": "IPO Comprehensive Solutions",
  "servicesIPODescription": "...",
  "servicesMarketTitle": "Market Cap Management",
  "servicesMarketDescription": "...",
  "servicesInvestmentTitle": "Investment Banking Services",
  "servicesInvestmentDescription": "...",
  "servicesSupportTitle": "Post-Listing Support",
  "servicesSupportDescription": "...",
  "aboutPageTitle": "About FTSE Finance",
  "aboutCompanyOverview": "...",
  "aboutGlobalPresence": "...",
  "aboutExpertise": "...",
  "servicesPageTitle": "Our Core Services",
  "servicesPageDescription": "...",
  "contactTitle": "Contact Us",
  "contactDescription": "...",
  "contactAddress": "Financial District, London, United Kingdom",
  "contactPhone": "+44 20 7123 4567",
  "contactEmail": "info@ftsefinance.com",
  "contactFormName": "Name",
  "contactFormEmail": "Email", 
  "contactFormMessage": "Message",
  "contactFormSubmit": "Send Message",
  "enterpriseTitle": "Enterprise Information Collection",
  "enterpriseDescription": "...",
  "companyName": "FTSE Finance",
  "companyAddress": "Financial District, London, United Kingdom",
  "companyPhone": "+44 20 7123 4567",
  "companyEmail": "info@ftsefinance.com",
  "companyWebsite": "https://ftsefinance.com"
}
```

## Features
- Multi-language support (English, Simplified Chinese, Traditional Chinese)
- Real-time content management
- IPO application form with comprehensive fields
- Responsive design
- Admin dashboard for content management

## Technical Stack
- **Frontend**: React + TypeScript + Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Routing**: React Router
- **State Management**: React Context
- **Data Storage**: localStorage (for demo purposes)

## File Structure
```
ftse_finance_website/
├── src/
│   ├── components/
│   │   ├── ui/           # UI components
│   │   ├── Navigation.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── contexts/
│   │   └── LanguageContext.tsx
│   ├── pages/
│   │   ├── Index.tsx     # Homepage
│   │   ├── About.tsx     # About page
│   │   ├── Services.tsx  # Services page
│   │   ├── Contact.tsx   # Contact page
│   │   └── EnterpriseForm.tsx # IPO application form
│   └── App.tsx
└── public/
    └── images/           # Static images
```

## Content Management
The admin dashboard allows editing of:
1. **Homepage Content**: Hero section, about section, services section
2. **About Page**: Company overview, global presence, expertise
3. **Services Page**: Page title and description
4. **Contact Page**: Contact information and form labels
5. **Company Information**: Global company details
6. **IPO Applications**: View and manage submissions

## Deployment Notes
- Both websites are deployed on Skywork platform
- Content changes in admin dashboard are immediately reflected on main website
- No server-side database required (uses localStorage)
- Cross-origin data sharing enabled through localStorage events