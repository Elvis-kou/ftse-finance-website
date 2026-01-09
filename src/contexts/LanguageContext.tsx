import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'zh-CN' | 'zh-TW';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Default translation data (fallback)
const defaultTranslations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.enterprise-form': 'Enterprise Form',
    
    // Hero Section
    'hero.title': 'FTSE FINANCE',
    'hero.subtitle': 'US IPO & Market Cap Management Solutions',
    'hero.description': 'Innovative partner for enterprise US stock listing and market value management. With cutting-edge fintech and professional service teams, we help companies break through listing barriers and build efficient market cap management systems.',
    'hero.cta.primary': 'Get Started',
    'hero.cta.secondary': 'Learn More',
    
    // About Section
    'about.title': 'About FTSE Finance',
    'about.description': 'FTSE Finance is positioned as an innovative partner for enterprise US stock listing and market value management. Founded in Hong Kong in 2017 and headquartered in London since 2024, we provide comprehensive IPO solutions and post-listing market cap management services.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'With cutting-edge fintech and professional service teams, we help companies break through listing barriers, utilize fundraising capabilities and proprietary funds to build efficient market cap management systems, empowering sustainable enterprise growth.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'To be the leading partner for Chinese private enterprises and overseas companies in cross-border investment, financing, and listing, creating unique value for clients and helping enterprises succeed in capital markets.',
    
    // Services Section
    'services.title': 'Our Services',
    'services.financial-consulting.title': 'IPO Comprehensive Solutions',
    'services.financial-consulting.description': 'Full-process IPO services from preparation to implementation, typically completed within 9-12 months.',
    'services.investment-management.title': 'Market Cap Management',
    'services.investment-management.description': 'Advanced liquidity management tools and market value stabilization strategies for post-listing performance.',
    'services.risk-assessment.title': 'Investment Banking Services',
    'services.risk-assessment.description': 'Corporate financing, M&A restructuring, and comprehensive capital market operations.',
    'services.corporate-finance.title': 'Post-Listing Support',
    'services.corporate-finance.description': 'Investor relations management, compliance consulting, refinancing, and strategic advisory services.',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.description': 'Get in touch with our team of financial experts.',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    
    // Enterprise Form
    'enterprise.title': 'Enterprise Information Collection',
    'enterprise.description': 'Please provide your enterprise information for our comprehensive financial assessment.',
    'enterprise.form.company-name': 'Company Name',
    'enterprise.form.industry': 'Industry',
    'enterprise.form.employees': 'Number of Employees',
    'enterprise.form.revenue': 'Annual Revenue',
    'enterprise.form.contact-person': 'Contact Person',
    'enterprise.form.phone': 'Phone Number',
    'enterprise.form.email': 'Email Address',
    'enterprise.form.requirements': 'Financial Service Requirements',
    'enterprise.form.submit': 'Submit Information',
    
    // About Page Details
    'about.company.overview': 'FTSE Finance is positioned as an innovative partner for enterprise US stock listing and market value management. Founded in Hong Kong in 2017 and headquartered in London since 2024, we have successfully assisted multiple companies in completing over $50 billion in transactions.',
    'about.global.presence': 'With offices in Shenzhen, Guangzhou, Hefei, Hong Kong, and London, we serve Chinese private enterprises and overseas companies with comprehensive cross-border investment, financing, and listing services.',
    'about.expertise': 'We specialize in IPO comprehensive solutions, market cap management, investment banking services, and post-listing support, utilizing cutting-edge fintech and quantitative trading models to ensure optimal market performance.',
    
    // Services Page Details
    'services.ipo.title': 'IPO Comprehensive Solutions',
    'services.ipo.desc': 'Full-process IPO services from preparation to implementation, typically completed within 9-12 months.',
    'services.market.title': 'Market Cap Management',
    'services.market.desc': 'Advanced liquidity management tools and market value stabilization strategies for post-listing performance.',
    'services.investment.title': 'Investment Banking Services',
    'services.investment.desc': 'Corporate financing, M&A restructuring, and comprehensive capital market operations.',
    'services.support.title': 'Post-Listing Support',
    'services.support.desc': 'Investor relations management, compliance consulting, refinancing, and strategic advisory services.',
    
    // Statistics
    'stats.transactions.number': '$50B+',
    'stats.transactions.label': 'Transactions Completed',
    'stats.timeline.number': '9-12',
    'stats.timeline.label': 'Months IPO Timeline',
    'stats.founded.number': '2017',
    'stats.founded.label': 'Founded in Hong Kong',
    'stats.offices.number': '5+',
    'stats.offices.label': 'Global Offices',
    
    // Common
    'common.loading': 'Loading...',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
  },
  'zh-CN': {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.services': '服务',
    'nav.contact': '联系我们',
    'nav.enterprise-form': '企业表单',
    
    // Hero Section
    'hero.title': '富时金融',
    'hero.subtitle': '美股IPO与市值管理解决方案',
    'hero.description': '企业美股上市与市值管理的创新驱动型合作伙伴。凭借先进的金融科技和专业服务团队，帮助企业突破上市壁垒，构建高效的市值管理体系。',
    'hero.cta.primary': '开始咨询',
    'hero.cta.secondary': '了解更多',
    
    // About Section
    'about.title': '关于富时金融',
    'about.description': '富时金融定位于企业美股上市与市值管理的创新驱动型合作伙伴。2017年在香港成立，2024年总部迁至英国伦敦，提供全面的IPO解决方案和上市后市值管理服务。',
    'about.mission.title': '我们的使命',
    'about.mission.description': '凭借先进的金融科技和专业服务团队，帮助企业突破上市壁垒，利用募资能力和自有资金构建高效的市值管理体系，赋能企业可持续增长。',
    'about.vision.title': '我们的愿景',
    'about.vision.description': '成为中国民营企业和海外公司跨境投资、融资和上市的领先合作伙伴，为客户创造独特价值，助力企业在资本市场取得成功。',
    
    // Services Section
    'services.title': '我们的服务',
    'services.financial-consulting.title': 'IPO综合解决方案',
    'services.financial-consulting.description': '从准备到实施的全流程IPO服务，通常在9-12个月内完成。',
    'services.investment-management.title': '市值管理',
    'services.investment-management.description': '先进的流动性管理工具和市值稳定策略，提升上市后表现。',
    'services.risk-assessment.title': '投资银行服务',
    'services.risk-assessment.description': '企业投融资与并购重组，全面的资本市场操作。',
    'services.corporate-finance.title': '上市后支持',
    'services.corporate-finance.description': '投资者关系管理、合规咨询、再融资和战略顾问服务。',
    
    // Contact Section
    'contact.title': '联系我们',
    'contact.description': '与我们的金融专家团队取得联系。',
    'contact.address': '地址',
    'contact.phone': '电话',
    'contact.email': '邮箱',
    'contact.form.name': '姓名',
    'contact.form.email': '邮箱',
    'contact.form.message': '留言',
    'contact.form.submit': '发送消息',
    
    // Enterprise Form
    'enterprise.title': '企业信息收集',
    'enterprise.description': '请提供您的企业信息，以便我们进行全面的金融评估。',
    'enterprise.form.company-name': '公司名称',
    'enterprise.form.industry': '行业',
    'enterprise.form.employees': '员工人数',
    'enterprise.form.revenue': '年营业额',
    'enterprise.form.contact-person': '联系人',
    'enterprise.form.phone': '联系电话',
    'enterprise.form.email': '邮箱地址',
    'enterprise.form.requirements': '金融服务需求',
    'enterprise.form.submit': '提交信息',
    
    // About Page Details
    'about.company.overview': 'FTSE Finance定位于企业美股上市与市值管理的创新驱动型合作伙伴。2017年在香港成立，2024年总部迁至英国伦敦，已成功协助多家公司完成超过500亿美元的交易。',
    'about.global.presence': '在深圳、广州、合肥、香港和伦敦设有办事处，为中国民营企业和海外公司提供全面的跨境投资、融资和上市服务。',
    'about.expertise': '我们专业于IPO综合解决方案、市值管理、投资银行服务和上市后支持，利用先进的金融科技和量化交易模型确保最佳市场表现。',
    
    // Services Page Details
    'services.ipo.title': 'IPO综合解决方案',
    'services.ipo.desc': '从准备到实施的全流程 IPO 服务，通常在9-12个月内完成。',
    'services.market.title': '市值管理',
    'services.market.desc': '先进的流动性管理工具和市值稳定策略，提升上市后表现。',
    'services.investment.title': '投资银行服务',
    'services.investment.desc': '企业投融资与并购重组，全面的资本市场操作。',
    'services.support.title': '上市后支持',
    'services.support.desc': '投资者关系管理、合规咨询、再融资和战略顾问服务。',
    
    // Statistics
    'stats.transactions.number': '$500亿+',
    'stats.transactions.label': '已完成交易',
    'stats.timeline.number': '9-12',
    'stats.timeline.label': '个月IPO时间线',
    'stats.founded.number': '2017',
    'stats.founded.label': '香港成立',
    'stats.offices.number': '5+',
    'stats.offices.label': '全球办事处',
    
    // Common
    'common.loading': '加载中...',
    'common.submit': '提交',
    'common.cancel': '取消',
    'common.save': '保存',
    'common.edit': '编辑',
    'common.delete': '删除',
  },
  'zh-TW': {
    // Navigation
    'nav.home': '首頁',
    'nav.about': '關於我們',
    'nav.services': '服務',
    'nav.contact': '聯繫我們',
    'nav.enterprise-form': '企業表單',
    
    // Hero Section
    'hero.title': '富時金融',
    'hero.subtitle': '美股IPO與市值管理解決方案',
    'hero.description': '企業美股上市與市值管理的創新驅動型合作夥伴。憑藉先進的金融科技和專業服務團隊，幫助企業突破上市壁壘，構建高效的市值管理體系。',
    'hero.cta.primary': '開始諮詢',
    'hero.cta.secondary': '了解更多',
    
    // About Section
    'about.title': '關於富時金融',
    'about.description': '富時金融定位於企業美股上市與市值管理的創新驅動型合作夥伴。2017年在香港成立，2024年總部遷至英國倫敦，提供全面的IPO解決方案和上市後市值管理服務。',
    'about.mission.title': '我們的使命',
    'about.mission.description': '憑藉先進的金融科技和專業服務團隊，幫助企業突破上市壁壘，利用募資能力和自有資金構建高效的市值管理體系，賦能企業可持續增長。',
    'about.vision.title': '我們的願景',
    'about.vision.description': '成為中國民營企業和海外公司跨境投資、融資和上市的領先合作夥伴，為客戶創造獨特價值，助力企業在資本市場取得成功。',
    
    // Services Section
    'services.title': '我們的服務',
    'services.financial-consulting.title': 'IPO綜合解決方案',
    'services.financial-consulting.description': '從準備到實施的全流程IPO服務，通常在9-12個月內完成。',
    'services.investment-management.title': '市值管理',
    'services.investment-management.description': '先進的流動性管理工具和市值穩定策略，提升上市後表現。',
    'services.risk-assessment.title': '投資銀行服務',
    'services.risk-assessment.description': '企業投融資與併購重組，全面的資本市場操作。',
    'services.corporate-finance.title': '上市後支持',
    'services.corporate-finance.description': '投資者關係管理、合規諮詢、再融資和戰略顧問服務。',
    
    // Contact Section
    'contact.title': '聯繫我們',
    'contact.description': '與我們的金融專家團隊取得聯繫。',
    'contact.address': '地址',
    'contact.phone': '電話',
    'contact.email': '郵箱',
    'contact.form.name': '姓名',
    'contact.form.email': '郵箱',
    'contact.form.message': '留言',
    'contact.form.submit': '發送消息',
    
    // Enterprise Form
    'enterprise.title': '企業信息收集',
    'enterprise.description': '請提供您的企業信息，以便我們進行全面的金融評估。',
    'enterprise.form.company-name': '公司名稱',
    'enterprise.form.industry': '行業',
    'enterprise.form.employees': '員工人數',
    'enterprise.form.revenue': '年營業額',
    'enterprise.form.contact-person': '聯繫人',
    'enterprise.form.phone': '聯繫電話',
    'enterprise.form.email': '郵箱地址',
    'enterprise.form.requirements': '金融服務需求',
    'enterprise.form.submit': '提交信息',
    
    // About Page Details
    'about.company.overview': 'FTSE Finance定位於企業美股上市與市值管理的創新驅動型合作夥伴。2017年在香港成立，2024年總部遷至英國倫敦，已成功協助多家公司完成超過500億美元的交易。',
    'about.global.presence': '在深圳、廣州、合肥、香港和倫敦設有辦事處，為中國民營企業和海外公司提供全面的跨境投資、融資和上市服務。',
    'about.expertise': '我們專業於IPO綜合解決方案、市值管理、投資銀行服務和上市後支持，利用先進的金融科技和量化交易模型確保最佳市場表現。',
    
    // Services Page Details
    'services.ipo.title': 'IPO綜合解決方案',
    'services.ipo.desc': '從準備到實施的全流程 IPO 服務，通常在9-12個月內完成。',
    'services.market.title': '市值管理',
    'services.market.desc': '先進的流動性管理工具和市值穩定策略，提升上市後表現。',
    'services.investment.title': '投資銀行服務',
    'services.investment.desc': '企業投融資與併購重組，全面的資本市場操作。',
    'services.support.title': '上市後支持',
    'services.support.desc': '投資者關係管理、合規諮詢、再融資和戰略顧問服務。',
    
    // Statistics
    'stats.transactions.number': '$500億+',
    'stats.transactions.label': '已完成交易',
    'stats.timeline.number': '9-12',
    'stats.timeline.label': '個月IPO時間線',
    'stats.founded.number': '2017',
    'stats.founded.label': '香港成立',
    'stats.offices.number': '5+',
    'stats.offices.label': '全球辦事處',
    
    // Common
    'common.loading': '加載中...',
    'common.submit': '提交',
    'common.cancel': '取消',
    'common.save': '保存',
    'common.edit': '編輯',
    'common.delete': '刪除',
  },
};

// Function to load content from CMS
const loadCMSContent = (language: Language) => {
  try {
    const cmsContent = localStorage.getItem(`websiteContent_${language}`);
    if (cmsContent) {
      const content = JSON.parse(cmsContent);
      return {
        // Navigation
        'nav.home': content.navHome || defaultTranslations[language]['nav.home'],
        'nav.about': content.navAbout || defaultTranslations[language]['nav.about'],
        'nav.services': content.navServices || defaultTranslations[language]['nav.services'],
        'nav.contact': content.navContact || defaultTranslations[language]['nav.contact'],
        'nav.enterprise-form': content.navEnterpriseForm || defaultTranslations[language]['nav.enterprise-form'],
        
        // Hero Section
        'hero.title': content.heroTitle || defaultTranslations[language]['hero.title'],
        'hero.subtitle': content.heroSubtitle || defaultTranslations[language]['hero.subtitle'],
        'hero.description': content.heroDescription || defaultTranslations[language]['hero.description'],
        'hero.cta.primary': content.heroCTAPrimary || defaultTranslations[language]['hero.cta.primary'],
        'hero.cta.secondary': content.heroCTASecondary || defaultTranslations[language]['hero.cta.secondary'],
        
        // About Section
        'about.title': content.aboutTitle || defaultTranslations[language]['about.title'],
        'about.description': content.aboutDescription || defaultTranslations[language]['about.description'],
        'about.mission.title': content.aboutMissionTitle || defaultTranslations[language]['about.mission.title'],
        'about.mission.description': content.aboutMissionDescription || defaultTranslations[language]['about.mission.description'],
        'about.vision.title': content.aboutVisionTitle || defaultTranslations[language]['about.vision.title'],
        'about.vision.description': content.aboutVisionDescription || defaultTranslations[language]['about.vision.description'],
        
        // Services Section
        'services.title': content.servicesTitle || defaultTranslations[language]['services.title'],
        'services.financial-consulting.title': content.servicesIPOTitle || defaultTranslations[language]['services.financial-consulting.title'],
        'services.financial-consulting.description': content.servicesIPODescription || defaultTranslations[language]['services.financial-consulting.description'],
        'services.investment-management.title': content.servicesMarketTitle || defaultTranslations[language]['services.investment-management.title'],
        'services.investment-management.description': content.servicesMarketDescription || defaultTranslations[language]['services.investment-management.description'],
        'services.risk-assessment.title': content.servicesInvestmentTitle || defaultTranslations[language]['services.risk-assessment.title'],
        'services.risk-assessment.description': content.servicesInvestmentDescription || defaultTranslations[language]['services.risk-assessment.description'],
        'services.corporate-finance.title': content.servicesSupportTitle || defaultTranslations[language]['services.corporate-finance.title'],
        'services.corporate-finance.description': content.servicesSupportDescription || defaultTranslations[language]['services.corporate-finance.description'],
        
        // Contact Section
        'contact.title': content.contactTitle || defaultTranslations[language]['contact.title'],
        'contact.description': content.contactDescription || defaultTranslations[language]['contact.description'],
        'contact.address': content.contactAddress || defaultTranslations[language]['contact.address'],
        'contact.phone': content.contactPhone || defaultTranslations[language]['contact.phone'],
        'contact.email': content.contactEmail || defaultTranslations[language]['contact.email'],
        'contact.form.name': content.contactFormName || defaultTranslations[language]['contact.form.name'],
        'contact.form.email': content.contactFormEmail || defaultTranslations[language]['contact.form.email'],
        'contact.form.message': content.contactFormMessage || defaultTranslations[language]['contact.form.message'],
        'contact.form.submit': content.contactFormSubmit || defaultTranslations[language]['contact.form.submit'],
        
        // Enterprise Form
        'enterprise.title': content.enterpriseTitle || defaultTranslations[language]['enterprise.title'],
        'enterprise.description': content.enterpriseDescription || defaultTranslations[language]['enterprise.description'],
        
        // About Page Details
        'about.company.overview': content.aboutCompanyOverview || defaultTranslations[language]['about.company.overview'],
        'about.global.presence': content.aboutGlobalPresence || defaultTranslations[language]['about.global.presence'],
        'about.expertise': content.aboutExpertise || defaultTranslations[language]['about.expertise'],
        
        // Services Page Details
        'services.ipo.title': content.servicesIPOTitle || defaultTranslations[language]['services.ipo.title'],
        'services.ipo.desc': content.servicesIPODescription || defaultTranslations[language]['services.ipo.desc'],
        'services.market.title': content.servicesMarketTitle || defaultTranslations[language]['services.market.title'],
        'services.market.desc': content.servicesMarketDescription || defaultTranslations[language]['services.market.desc'],
        'services.investment.title': content.servicesInvestmentTitle || defaultTranslations[language]['services.investment.title'],
        'services.investment.desc': content.servicesInvestmentDescription || defaultTranslations[language]['services.investment.desc'],
        'services.support.title': content.servicesSupportTitle || defaultTranslations[language]['services.support.title'],
        'services.support.desc': content.servicesSupportDescription || defaultTranslations[language]['services.support.desc'],
        
        // Statistics
        'stats.transactions.number': content.statsTransactionsNumber || defaultTranslations[language]['stats.transactions.number'],
        'stats.transactions.label': content.statsTransactionsLabel || defaultTranslations[language]['stats.transactions.label'],
        'stats.timeline.number': content.statsTimelineNumber || defaultTranslations[language]['stats.timeline.number'],
        'stats.timeline.label': content.statsTimelineLabel || defaultTranslations[language]['stats.timeline.label'],
        'stats.founded.number': content.statsFoundedNumber || defaultTranslations[language]['stats.founded.number'],
        'stats.founded.label': content.statsFoundedLabel || defaultTranslations[language]['stats.founded.label'],
        'stats.offices.number': content.statsOfficesNumber || defaultTranslations[language]['stats.offices.number'],
        'stats.offices.label': content.statsOfficesLabel || defaultTranslations[language]['stats.offices.label'],
        
        // Keep default values for other keys
        ...defaultTranslations[language],
      };
    }
  } catch (error) {
    console.error('Error loading CMS content:', error);
  }
  return defaultTranslations[language];
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState(defaultTranslations);

  useEffect(() => {
    // Load CMS content when language changes
    const cmsTranslations = {
      en: loadCMSContent('en'),
      'zh-CN': loadCMSContent('zh-CN'),
      'zh-TW': loadCMSContent('zh-TW'),
    };
    setTranslations(cmsTranslations);
  }, [language]);

  // Listen for storage changes to update content in real-time
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key?.startsWith('websiteContent_')) {
        const cmsTranslations = {
          en: loadCMSContent('en'),
          'zh-CN': loadCMSContent('zh-CN'),
          'zh-TW': loadCMSContent('zh-TW'),
        };
        setTranslations(cmsTranslations);
      }
    };

    // Check for updates from CMS every 5 seconds
    const checkForUpdates = () => {
      try {
        const syncData = localStorage.getItem('ftse_cms_sync');
        if (syncData) {
          const { timestamp, language: syncLang, content } = JSON.parse(syncData);
          const lastCheck = localStorage.getItem('last_cms_check');
          const lastCheckTime = lastCheck ? parseInt(lastCheck) : 0;
          
          if (timestamp > lastCheckTime) {
            localStorage.setItem('last_cms_check', timestamp.toString());
            const cmsTranslations = {
              en: loadCMSContent('en'),
              'zh-CN': loadCMSContent('zh-CN'),
              'zh-TW': loadCMSContent('zh-TW'),
            };
            setTranslations(cmsTranslations);
          }
        }
      } catch (error) {
        console.error('Error checking for CMS updates:', error);
      }
    };

    const interval = setInterval(checkForUpdates, 5000); // Check every 5 seconds
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};