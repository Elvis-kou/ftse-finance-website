-- 创建 website_content 表
CREATE TABLE IF NOT EXISTS public.website_content (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  language text NOT NULL,
  navHome text,
  navAbout text,
  navServices text,
  navContact text,
  navEnterpriseForm text,
  heroTitle text,
  heroSubtitle text,
  heroDescription text,
  heroCTAPrimary text,
  heroCTASecondary text,
  aboutTitle text,
  aboutDescription text,
  aboutMissionTitle text,
  aboutMissionDescription text,
  aboutVisionTitle text,
  aboutVisionDescription text,
  servicesTitle text,
  servicesIPOTitle text,
  servicesIPODescription text,
  servicesMarketTitle text,
  servicesMarketDescription text,
  servicesInvestmentTitle text,
  servicesInvestmentDescription text,
  servicesSupportTitle text,
  servicesSupportDescription text,
  contactTitle text,
  contactDescription text,
  contactAddress text,
  contactPhone text,
  contactEmail text,
  contactFormName text,
  contactFormEmail text,
  contactFormMessage text,
  contactFormSubmit text,
  enterpriseTitle text,
  enterpriseDescription text,
  aboutCompanyOverview text,
  aboutGlobalPresence text,
  aboutExpertise text,
  statsTransactionsNumber text,
  statsTransactionsLabel text,
  statsTimelineNumber text,
  statsTimelineLabel text,
  statsFoundedNumber text,
  statsFoundedLabel text,
  statsOfficesNumber text,
  statsOfficesLabel text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- 启用 RLS（Row Level Security）
ALTER TABLE public.website_content ENABLE ROW LEVEL SECURITY;

-- 创建 RLS 策略：允许匿名用户读取网站内容
CREATE POLICY "Allow public read access" ON public.website_content
FOR SELECT
USING (true);

-- 创建 RLS 策略：只允许管理员修改内容
-- 请将 'admin@example.com' 替换为您的管理员邮箱
CREATE POLICY "Allow admin update" ON public.website_content
FOR UPDATE
USING (auth.role() = 'authenticated' AND auth.email() = 'admin@example.com');

-- 创建 RLS 策略：只允许管理员插入内容
CREATE POLICY "Allow admin insert" ON public.website_content
FOR INSERT
WITH CHECK (auth.role() = 'authenticated' AND auth.email() = 'admin@example.com');

-- 创建 RLS 策略：只允许管理员删除内容
CREATE POLICY "Allow admin delete" ON public.website_content
FOR DELETE
USING (auth.role() = 'authenticated' AND auth.email() = 'admin@example.com');

-- 添加更多字段
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactBackToHome text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactSendMessageTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactSendMessageDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactFormCompany text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactFormSubject text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactFormCompanyPlaceholder text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactFormNamePlaceholder text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactFormEmailPlaceholder text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactFormMessagePlaceholder text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactGetInTouch text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactGetInTouchDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactGlobalHeadquarters text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactGeneralInquiries text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactBusinessHours text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactBusinessHoursTime text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactEnterpriseSolutions text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactEnterpriseSolutionsDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactEnterpriseSolutionsButton text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactToastSuccessTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactToastSuccessDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactToastErrorTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactToastErrorDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactSubjectsGeneral text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactSubjectsIndex text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactSubjectsData text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactSubjectsCustom text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactSubjectsEsg text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactSubjectsPartnership text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactSubjectsSupport text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS contactSubjectsMedia text;

-- About Page fields
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutBackToHome text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutOverviewSubtitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutOverviewTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutValuesTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutValuesDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutValuesProfessionalTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutValuesProfessionalDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutValuesGlobalTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutValuesGlobalDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutValuesInnovationTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutValuesInnovationDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutValuesClientTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutValuesClientDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutTeamTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutTeamDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutTeamBackground text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutTeamExpertise text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutJourneyTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutJourneyDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutPresenceTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutPresenceDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutPresenceLondon text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutPresenceLondonLabel text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutPresenceHongkong text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutPresenceHongkongLabel text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutPresenceShenzhen text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutPresenceShenzhenLabel text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutMilestones2017 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutMilestones2020 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutMilestones2022 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS aboutMilestones2024 text;

-- Services Page fields
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesBackToHome text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesSubtitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesCoreTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesCoreDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIPOFeature1 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIPOFeature2 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIPOFeature3 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIPOFeature4 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesMarketFeature1 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesMarketFeature2 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesMarketFeature3 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesMarketFeature4 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesInvestmentFeature1 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesInvestmentFeature2 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesInvestmentFeature3 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesInvestmentFeature4 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesSupportFeature1 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesSupportFeature2 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesSupportFeature3 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesSupportFeature4 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesRiskTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesRiskDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesRiskFeature1 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesRiskFeature2 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesRiskFeature3 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesRiskFeature4 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesFintechTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesFintechDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesFintechFeature1 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesFintechFeature2 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesFintechFeature3 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesFintechFeature4 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessPreTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessPreStep1 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessPreStep2 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessPreStep3 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessPreStep4 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessPreStep5 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessImplementationTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessImplementationStep1 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessImplementationStep2 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessImplementationStep3 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessImplementationStep4 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessImplementationStep5 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessPostTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessPostStep1 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessPostStep2 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessPostStep3 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessPostStep4 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesProcessPostStep5 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIndustriesTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIndustriesDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIndustriesCryptoTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIndustriesCryptoDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIndustriesNevTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIndustriesNevDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIndustriesMedicalTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIndustriesMedicalDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIndustriesAiTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIndustriesAiDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIndustriesEducationTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIndustriesEducationDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIndustriesTechTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesIndustriesTechDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesAdvantagesTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesAdvantagesTrackRecordTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesAdvantagesTrackRecordDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesAdvantagesTimelineTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesAdvantagesTimelineDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesAdvantagesCapitalTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesAdvantagesCapitalDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesAdvantagesCustomTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesAdvantagesCustomDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesNasdaqTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesNasdaqDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesNasdaqFlexibleTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesNasdaqFlexibleDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesNasdaqCostsTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesNasdaqCostsDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesNasdaqMarketTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesNasdaqMarketDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesNasdaqMaTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesNasdaqMaDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesCtaTitle text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesCtaDescription text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesCtaButton1 text;
ALTER TABLE public.website_content ADD COLUMN IF NOT EXISTS servicesCtaButton2 text;

-- 创建唯一索引，确保每种语言只有一条记录
CREATE UNIQUE INDEX IF NOT EXISTS website_content_language_idx ON public.website_content(language);

-- 创建更新时间的触发器函数
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 创建触发器，在更新记录时自动更新 updated_at 字段
CREATE TRIGGER update_website_content_updated_at
BEFORE UPDATE ON public.website_content
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- 插入初始数据
-- English content
INSERT INTO public.website_content (
  language, navHome, navAbout, navServices, navContact, navEnterpriseForm,
  heroTitle, heroSubtitle, heroDescription, heroCTAPrimary, heroCTASecondary,
  aboutTitle, aboutDescription, aboutMissionTitle, aboutMissionDescription,
  aboutVisionTitle, aboutVisionDescription, servicesTitle, servicesIPOTitle,
  servicesIPODescription, servicesMarketTitle, servicesMarketDescription,
  servicesInvestmentTitle, servicesInvestmentDescription, servicesSupportTitle,
  servicesSupportDescription, contactTitle, contactDescription,
  contactFormName, contactFormEmail, contactFormMessage, contactFormSubmit,
  enterpriseTitle, enterpriseDescription, aboutCompanyOverview,
  aboutGlobalPresence, aboutExpertise, statsTransactionsNumber,
  statsTransactionsLabel, statsTimelineNumber, statsTimelineLabel,
  statsFoundedNumber, statsFoundedLabel, statsOfficesNumber, statsOfficesLabel
)
VALUES (
  'en', 'Home', 'About Us', 'Services', 'Contact', 'Enterprise Form',
  'FTSE FINANCE', 'US IPO & Market Cap Management Solutions',
  'Innovative partner for enterprise US stock listing and market value management. With cutting-edge fintech and professional service teams, we help companies break through listing barriers and build efficient market cap management systems.',
  'Get Started', 'Learn More',
  'About FTSE Finance',
  'FTSE Finance is positioned as an innovative partner for enterprise US stock listing and market value management. Founded in Hong Kong in 2017 and headquartered in London since 2024, we provide comprehensive IPO solutions and post-listing market cap management services.',
  'Our Mission',
  'With cutting-edge fintech and professional service teams, we help companies break through listing barriers, utilize fundraising capabilities and proprietary funds to build efficient market cap management systems, empowering sustainable enterprise growth.',
  'Our Vision',
  'To be the leading partner for Chinese private enterprises and overseas companies in cross-border investment, financing, and listing, creating unique value for clients and helping enterprises succeed in capital markets.',
  'Our Services', 'IPO Comprehensive Solutions',
  'Full-process IPO services from preparation to implementation, typically completed within 9-12 months.',
  'Market Cap Management',
  'Advanced liquidity management tools and market value stabilization strategies for post-listing performance.',
  'Investment Banking Services',
  'Corporate financing, M&A restructuring, and comprehensive capital market operations.',
  'Post-Listing Support',
  'Investor relations management, compliance consulting, refinancing, and strategic advisory services.',
  'Contact Us', 'Get in touch with our team of financial experts.',
  'Name', 'Email', 'Message', 'Send Message',
  'Enterprise Information Collection',
  'Please provide your enterprise information for our comprehensive financial assessment.',
  'FTSE Finance is positioned as an innovative partner for enterprise US stock listing and market value management. Founded in Hong Kong in 2017 and headquartered in London since 2024, we have successfully assisted multiple companies in completing over $50 billion in transactions.',
  'With offices in Shenzhen, Guangzhou, Hefei, Hong Kong, and London, we serve Chinese private enterprises and overseas companies with comprehensive cross-border investment, financing, and listing services.',
  'We specialize in IPO comprehensive solutions, market cap management, investment banking services, and post-listing support, utilizing cutting-edge fintech and quantitative trading models to ensure optimal market performance.',
  '$50B+', 'Transactions Completed',
  '9-12', 'Months IPO Timeline',
  '2017', 'Founded in Hong Kong',
  '5+', 'Global Offices'
)
ON CONFLICT (language) DO NOTHING;

-- Simplified Chinese content
INSERT INTO public.website_content (
  language, navHome, navAbout, navServices, navContact, navEnterpriseForm,
  heroTitle, heroSubtitle, heroDescription, heroCTAPrimary, heroCTASecondary,
  aboutTitle, aboutDescription, aboutMissionTitle, aboutMissionDescription,
  aboutVisionTitle, aboutVisionDescription, servicesTitle, servicesIPOTitle,
  servicesIPODescription, servicesMarketTitle, servicesMarketDescription,
  servicesInvestmentTitle, servicesInvestmentDescription, servicesSupportTitle,
  servicesSupportDescription, contactTitle, contactDescription,
  contactFormName, contactFormEmail, contactFormMessage, contactFormSubmit,
  enterpriseTitle, enterpriseDescription, aboutCompanyOverview,
  aboutGlobalPresence, aboutExpertise, statsTransactionsNumber,
  statsTransactionsLabel, statsTimelineNumber, statsTimelineLabel,
  statsFoundedNumber, statsFoundedLabel, statsOfficesNumber, statsOfficesLabel
)
VALUES (
  'zh-CN', '首页', '关于我们', '服务', '联系我们', '企业表单',
  '富时金融', '美股IPO与市值管理解决方案',
  '企业美股上市与市值管理的创新驱动型合作伙伴。凭借先进的金融科技和专业服务团队，帮助企业突破上市壁垒，构建高效的市值管理体系。',
  '开始咨询', '了解更多',
  '关于富时金融',
  '富时金融定位于企业美股上市与市值管理的创新驱动型合作伙伴。2017年在香港成立，2024年总部迁至英国伦敦，提供全面的IPO解决方案和上市后市值管理服务。',
  '我们的使命',
  '凭借先进的金融科技和专业服务团队，帮助企业突破上市壁垒，利用募资能力和自有资金构建高效的市值管理体系，赋能企业可持续增长。',
  '我们的愿景',
  '成为中国民营企业和海外公司跨境投资、融资和上市的领先合作伙伴，为客户创造独特价值，助力企业在资本市场取得成功。',
  '我们的服务', 'IPO综合解决方案',
  '从准备到实施的全流程IPO服务，通常在9-12个月内完成。',
  '市值管理',
  '先进的流动性管理工具和市值稳定策略，提升上市后表现。',
  '投资银行服务',
  '企业投融资与并购重组，全面的资本市场操作。',
  '上市后支持',
  '投资者关系管理、合规咨询、再融资和战略顾问服务。',
  '联系我们', '与我们的金融专家团队取得联系。',
  '姓名', '邮箱', '留言', '发送消息',
  '企业信息收集',
  '请提供您的企业信息，以便我们进行全面的金融评估。',
  'FTSE Finance定位于企业美股上市与市值管理的创新驱动型合作伙伴。2017年在香港成立，2024年总部迁至英国伦敦，已成功协助多家公司完成超过500亿美元的交易。',
  '在深圳、广州、合肥、香港和伦敦设有办事处，为中国民营企业和海外公司提供全面的跨境投资、融资和上市服务。',
  '我们专业于IPO综合解决方案、市值管理、投资银行服务和上市后支持，利用先进的金融科技和量化交易模型确保最佳市场表现。',
  '$500亿+', '已完成交易',
  '9-12', '个月IPO时间线',
  '2017', '香港成立',
  '5+', '全球办事处'
)
ON CONFLICT (language) DO NOTHING;

-- Traditional Chinese content
INSERT INTO public.website_content (
  language, navHome, navAbout, navServices, navContact, navEnterpriseForm,
  heroTitle, heroSubtitle, heroDescription, heroCTAPrimary, heroCTASecondary,
  aboutTitle, aboutDescription, aboutMissionTitle, aboutMissionDescription,
  aboutVisionTitle, aboutVisionDescription, servicesTitle, servicesIPOTitle,
  servicesIPODescription, servicesMarketTitle, servicesMarketDescription,
  servicesInvestmentTitle, servicesInvestmentDescription, servicesSupportTitle,
  servicesSupportDescription, contactTitle, contactDescription,
  contactFormName, contactFormEmail, contactFormMessage, contactFormSubmit,
  enterpriseTitle, enterpriseDescription, aboutCompanyOverview,
  aboutGlobalPresence, aboutExpertise, statsTransactionsNumber,
  statsTransactionsLabel, statsTimelineNumber, statsTimelineLabel,
  statsFoundedNumber, statsFoundedLabel, statsOfficesNumber, statsOfficesLabel
)
VALUES (
  'zh-TW', '首頁', '關於我們', '服務', '聯繫我們', '企業表單',
  '富時金融', '美股IPO與市值管理解決方案',
  '企業美股上市與市值管理的創新驅動型合作夥伴。憑藉先進的金融科技和專業服務團隊，幫助企業突破上市壁壘，構建高效的市值管理體系。',
  '開始諮詢', '了解更多',
  '關於富時金融',
  '富時金融定位於企業美股上市與市值管理的創新驅動型合作夥伴。2017年在香港成立，2024年總部遷至英國倫敦，提供全面的IPO解決方案和上市後市值管理服務。',
  '我們的使命',
  '憑藉先進的金融科技和專業服務團隊，幫助企業突破上市壁壘，利用募資能力和自有資金構建高效的市值管理體系，賦能企業可持續增長。',
  '我們的願景',
  '成為中國民營企業和海外公司跨境投資、融資和上市的領先合作夥伴，為客戶創造獨特價值，助力企業在資本市場取得成功。',
  '我們的服務', 'IPO綜合解決方案',
  '從準備到實施的全流程IPO服務，通常在9-12個月內完成。',
  '市值管理',
  '先進的流動性管理工具和市值穩定策略，提升上市後表現。',
  '投資銀行服務',
  '企業投融資與併購重組，全面的資本市場操作。',
  '上市後支持',
  '投資者關係管理、合規諮詢、再融資和戰略顧問服務。',
  '聯繫我們', '與我們的金融專家團隊取得聯繫。',
  '姓名', '郵箱', '留言', '發送消息',
  '企業信息收集',
  '請提供您的企業信息，以便我們進行全面的金融評估。',
  'FTSE Finance定位於企業美股上市與市值管理的創新驅動型合作夥伴。2017年在香港成立，2024年總部遷至英國倫敦，已成功協助多家公司完成超過500億美元的交易。',
  '在深圳、廣州、合肥、香港和倫敦設有辦事處，為中國民營企業和海外公司提供全面的跨境投資、融資和上市服務。',
  '我們專業於IPO綜合解決方案、市值管理、投資銀行服務和上市後支持，利用先進的金融科技和量化交易模型確保最佳市場表現。',
  '$500億+', '已完成交易',
  '9-12', '個月IPO時間線',
  '2017', '香港成立',
  '5+', '全球辦事處'
)
ON CONFLICT (language) DO NOTHING;
