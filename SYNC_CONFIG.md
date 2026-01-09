# FTSE Finance CMS Synchronization Configuration

## Overview
This configuration enables real-time synchronization between the FTSE Finance admin dashboard and the main website.

## Synchronization Method
- **Primary**: localStorage with cross-tab events
- **Fallback**: Periodic polling every 5 seconds
- **Storage Keys**: 
  - `websiteContent_en` - English content
  - `websiteContent_zh-CN` - Simplified Chinese content
  - `websiteContent_zh-TW` - Traditional Chinese content
  - `ftse_cms_sync` - Global sync timestamp
  - `last_cms_check` - Last check timestamp

## How It Works

### Admin Dashboard (CMS)
1. User edits content in the admin interface
2. On save, content is stored in localStorage with language-specific keys
3. A global sync event is triggered with timestamp
4. Storage events are dispatched for real-time updates

### Main Website
1. Loads default content on initialization
2. Checks localStorage for CMS-managed content
3. Listens for storage events for real-time updates
4. Polls for changes every 5 seconds as fallback
5. Automatically updates displayed content when changes detected

## Content Mapping

### Navigation
- `navHome` → `nav.home`
- `navAbout` → `nav.about`
- `navServices` → `nav.services`
- `navContact` → `nav.contact`
- `navEnterpriseForm` → `nav.enterprise-form`

### Homepage Hero
- `heroTitle` → `hero.title`
- `heroSubtitle` → `hero.subtitle`
- `heroDescription` → `hero.description`
- `heroCTAPrimary` → `hero.cta.primary`
- `heroCTASecondary` → `hero.cta.secondary`

### About Section
- `aboutTitle` → `about.title`
- `aboutDescription` → `about.description`
- `aboutMissionTitle` → `about.mission.title`
- `aboutMissionDescription` → `about.mission.description`
- `aboutVisionTitle` → `about.vision.title`
- `aboutVisionDescription` → `about.vision.description`

### Services Section
- `servicesTitle` → `services.title`
- `servicesIPOTitle` → `services.financial-consulting.title`
- `servicesIPODescription` → `services.financial-consulting.description`
- `servicesMarketTitle` → `services.investment-management.title`
- `servicesMarketDescription` → `services.investment-management.description`
- `servicesInvestmentTitle` → `services.risk-assessment.title`
- `servicesInvestmentDescription` → `services.risk-assessment.description`
- `servicesSupportTitle` → `services.corporate-finance.title`
- `servicesSupportDescription` → `services.corporate-finance.description`

### Contact Information
- `contactTitle` → `contact.title`
- `contactDescription` → `contact.description`
- `contactAddress` → `contact.address`
- `contactPhone` → `contact.phone`
- `contactEmail` → `contact.email`
- `contactFormName` → `contact.form.name`
- `contactFormEmail` → `contact.form.email`
- `contactFormMessage` → `contact.form.message`
- `contactFormSubmit` → `contact.form.submit`

### Page-Specific Content
- `aboutCompanyOverview` → `about.company.overview`
- `aboutGlobalPresence` → `about.global.presence`
- `aboutExpertise` → `about.expertise`
- `enterpriseTitle` → `enterprise.title`
- `enterpriseDescription` → `enterprise.description`

## Testing Synchronization

1. Open both websites in separate tabs/windows
2. Login to admin dashboard (admin/ftse2024)
3. Edit any content and save
4. Check main website - changes should appear within 5 seconds
5. Try switching languages to test multi-language sync

## Troubleshooting

### Content Not Updating
1. Check browser console for errors
2. Verify localStorage contains the updated content
3. Try refreshing the main website
4. Clear localStorage and try again

### Cross-Origin Issues
- Both sites must be accessed via HTTPS
- localStorage is domain-specific
- For production, implement server-side synchronization

## Production Recommendations

For production deployment, consider:
1. **Database Backend**: Replace localStorage with a proper database
2. **Real-time Updates**: Use WebSockets or Server-Sent Events
3. **API Integration**: RESTful API for content management
4. **Caching**: Implement proper caching strategies
5. **Authentication**: Secure admin access with proper authentication
6. **Backup**: Regular content backups and version control