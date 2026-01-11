import React, { useState } from 'react';
import { ArrowLeft, Building, Users, DollarSign, Phone, Mail, FileText, Calendar, MapPin, User, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

interface FormData {
  // 基本企业信息
  companyName: string;
  companyNameEn: string;
  registrationNumber: string;
  establishedDate: string;
  registeredAddress: string;
  businessAddress: string;
  website: string;
  
  // 行业与业务
  industry: string;
  businessScope: string;
  mainProducts: string;
  businessModel: string;
  
  // 规模信息
  employees: string;
  revenue: string;
  netProfit: string;
  totalAssets: string;
  
  // 联系信息
  contactPerson: string;
  position: string;
  phone: string;
  email: string;
  
  // 股权结构
  shareholderStructure: string;
  majorShareholders: string;
  
  // 财务信息
  auditFirm: string;
  lastAuditYear: string;
  
  // IPO相关
  ipoReason: string;
  fundingPurpose: string;
  expectedAmount: string;
  expectedTimeline: string;
  
  // 法律合规
  legalIssues: string;
  complianceStatus: string;
  
  // 其他信息
  competitiveAdvantage: string;
  riskFactors: string;
  additionalInfo: string;
  
  // 文件上传确认
  documentsReady: boolean;
}

const EnterpriseForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    companyNameEn: '',
    registrationNumber: '',
    establishedDate: '',
    registeredAddress: '',
    businessAddress: '',
    website: '',
    industry: '',
    businessScope: '',
    mainProducts: '',
    businessModel: '',
    employees: '',
    revenue: '',
    netProfit: '',
    totalAssets: '',
    contactPerson: '',
    position: '',
    phone: '',
    email: '',
    shareholderStructure: '',
    majorShareholders: '',
    auditFirm: '',
    lastAuditYear: '',
    ipoReason: '',
    fundingPurpose: '',
    expectedAmount: '',
    expectedTimeline: '',
    legalIssues: '',
    complianceStatus: '',
    competitiveAdvantage: '',
    riskFactors: '',
    additionalInfo: '',
    documentsReady: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const industries = [
    'Technology & Software',
    'Artificial Intelligence',
    'Cryptocurrency & Blockchain',
    'New Energy Vehicles',
    'Medical Devices & Healthcare',
    'Online Education & EdTech',
    'Financial Technology',
    'E-commerce & Retail',
    'Manufacturing',
    'Real Estate',
    'Energy & Utilities',
    'Transportation & Logistics',
    'Biotechnology',
    'Telecommunications',
    'Other',
  ];

  const employeeRanges = [
    '1-10',
    '11-50',
    '51-200',
    '201-500',
    '501-1000',
    '1001-5000',
    '5000+',
  ];

  const revenueRanges = [
    'Under $1M',
    '$1M - $10M',
    '$10M - $50M',
    '$50M - $100M',
    '$100M - $500M',
    '$500M - $1B',
    '$1B+',
  ];

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 保存到localStorage模拟数据库存储
      const submissions = JSON.parse(localStorage.getItem('enterpriseSubmissions') || '[]');
      const newSubmission = {
        id: Date.now().toString(),
        ...formData,
        submittedAt: new Date().toISOString(),
        status: t('enterprise.form.status.new-application')
      };
      submissions.push(newSubmission);
      localStorage.setItem('enterpriseSubmissions', JSON.stringify(submissions));
      
      toast({
        title: t('enterprise.form.toast.success.title'),
        description: t('enterprise.form.toast.success.description'),
      });

      // Reset form
      setFormData({
        companyName: '',
        companyNameEn: '',
        registrationNumber: '',
        establishedDate: '',
        registeredAddress: '',
        businessAddress: '',
        website: '',
        industry: '',
        businessScope: '',
        mainProducts: '',
        businessModel: '',
        employees: '',
        revenue: '',
        netProfit: '',
        totalAssets: '',
        contactPerson: '',
        position: '',
        phone: '',
        email: '',
        shareholderStructure: '',
        majorShareholders: '',
        auditFirm: '',
        lastAuditYear: '',
        ipoReason: '',
        fundingPurpose: '',
        expectedAmount: '',
        expectedTimeline: '',
        legalIssues: '',
        complianceStatus: '',
        competitiveAdvantage: '',
        riskFactors: '',
        additionalInfo: '',
        documentsReady: false,
      });
    } catch (error) {
      toast({
        title: t('enterprise.form.toast.error.title'),
        description: t('enterprise.form.toast.error.description'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('enterprise.back-to-home')}
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('enterprise.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('enterprise.description')}
          </p>
        </div>

        {/* Form */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              {t('enterprise.form.form-title')}
            </CardTitle>
            <CardDescription>
              {t('enterprise.form.form-description')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* 基本企业信息 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">{t('enterprise.form.section.basic-info')}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">{t('enterprise.form.company-name.cn')} *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder={t('enterprise.form.placeholder.company-name.cn')}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyNameEn">{t('enterprise.form.company-name.en')} *</Label>
                    <Input
                      id="companyNameEn"
                      value={formData.companyNameEn}
                      onChange={(e) => handleInputChange('companyNameEn', e.target.value)}
                      placeholder={t('enterprise.form.placeholder.company-name.en')}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber">{t('enterprise.form.registration-number')} *</Label>
                    <Input
                      id="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                      placeholder={t('enterprise.form.placeholder.registration-number')}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="establishedDate">{t('enterprise.form.established-date')} *</Label>
                    <Input
                      id="establishedDate"
                      type="date"
                      value={formData.establishedDate}
                      onChange={(e) => handleInputChange('establishedDate', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="registeredAddress">{t('enterprise.form.registered-address')} *</Label>
                  <Input
                    id="registeredAddress"
                    value={formData.registeredAddress}
                    onChange={(e) => handleInputChange('registeredAddress', e.target.value)}
                    placeholder={t('enterprise.form.placeholder.registered-address')}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessAddress">{t('enterprise.form.business-address')}</Label>
                    <Input
                      id="businessAddress"
                      value={formData.businessAddress}
                      onChange={(e) => handleInputChange('businessAddress', e.target.value)}
                      placeholder={t('enterprise.form.placeholder.business-address')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">{t('enterprise.form.website')}</Label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      placeholder={t('enterprise.form.placeholder.website')}
                    />
                  </div>
                </div>
              </div>

              {/* 行业与业务信息 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">{t('enterprise.form.section.industry-info')}</h3>
                <div className="space-y-2">
                  <Label htmlFor="industry">{t('enterprise.form.industry')} *</Label>
                  <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('enterprise.form.select.industry')} />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessScope">{t('enterprise.form.business-scope')} *</Label>
                  <Textarea
                    id="businessScope"
                    value={formData.businessScope}
                    onChange={(e) => handleInputChange('businessScope', e.target.value)}
                    placeholder={t('enterprise.form.placeholder.business-scope')}
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mainProducts">{t('enterprise.form.main-products')} *</Label>
                  <Textarea
                    id="mainProducts"
                    value={formData.mainProducts}
                    onChange={(e) => handleInputChange('mainProducts', e.target.value)}
                    placeholder={t('enterprise.form.placeholder.main-products')}
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessModel">{t('enterprise.form.business-model')} *</Label>
                  <Textarea
                    id="businessModel"
                    value={formData.businessModel}
                    onChange={(e) => handleInputChange('businessModel', e.target.value)}
                    placeholder={t('enterprise.form.placeholder.business-model')}
                    rows={3}
                    required
                  />
                </div>
              </div>

              {/* 规模信息 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">{t('enterprise.form.section.scale-info')}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="employees">
                      <Users className="h-4 w-4 inline mr-2" />
                      {t('enterprise.form.employees')} *
                    </Label>
                    <Select value={formData.employees} onValueChange={(value) => handleInputChange('employees', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('enterprise.form.select.employees')} />
                      </SelectTrigger>
                      <SelectContent>
                        {employeeRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="revenue">
                      <DollarSign className="h-4 w-4 inline mr-2" />
                      {t('enterprise.form.revenue')} *
                    </Label>
                    <Select value={formData.revenue} onValueChange={(value) => handleInputChange('revenue', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('enterprise.form.select.revenue')} />
                      </SelectTrigger>
                      <SelectContent>
                        {revenueRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="netProfit">{t('enterprise.form.net-profit')}</Label>
                    <Input
                      id="netProfit"
                      value={formData.netProfit}
                      onChange={(e) => handleInputChange('netProfit', e.target.value)}
                      placeholder={t('enterprise.form.placeholder.net-profit')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="totalAssets">{t('enterprise.form.total-assets')}</Label>
                    <Input
                      id="totalAssets"
                      value={formData.totalAssets}
                      onChange={(e) => handleInputChange('totalAssets', e.target.value)}
                      placeholder={t('enterprise.form.placeholder.total-assets')}
                    />
                  </div>
                </div>
              </div>

              {/* 联系信息 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">{t('enterprise.form.section.contact-info')}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">{t('enterprise.form.contact-person')} *</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      placeholder={t('enterprise.form.placeholder.contact-person')}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">{t('enterprise.form.position')} *</Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      placeholder={t('enterprise.form.placeholder.position')}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      <Phone className="h-4 w-4 inline mr-2" />
                      {t('enterprise.form.phone')} *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder={t('enterprise.form.placeholder.phone')}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      <Mail className="h-4 w-4 inline mr-2" />
                      {t('enterprise.form.email')} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder={t('enterprise.form.placeholder.email')}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* 股权结构 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">{t('enterprise.form.section.ownership-info')}</h3>
                <div className="space-y-2">
                  <Label htmlFor="shareholderStructure">{t('enterprise.form.shareholder-structure')} *</Label>
                  <Textarea
                    id="shareholderStructure"
                    value={formData.shareholderStructure}
                    onChange={(e) => handleInputChange('shareholderStructure', e.target.value)}
                    placeholder={t('enterprise.form.placeholder.shareholder-structure')}
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="majorShareholders">{t('enterprise.form.major-shareholders')}</Label>
                  <Textarea
                    id="majorShareholders"
                    value={formData.majorShareholders}
                    onChange={(e) => handleInputChange('majorShareholders', e.target.value)}
                    placeholder={t('enterprise.form.placeholder.major-shareholders')}
                    rows={3}
                  />
                </div>
              </div>

              {/* 财务与审计信息 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">{t('enterprise.form.section.financial-info')}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="auditFirm">{t('enterprise.form.audit-firm')}</Label>
                    <Input
                      id="auditFirm"
                      value={formData.auditFirm}
                      onChange={(e) => handleInputChange('auditFirm', e.target.value)}
                      placeholder={t('enterprise.form.placeholder.audit-firm')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastAuditYear">{t('enterprise.form.last-audit-year')}</Label>
                    <Input
                      id="lastAuditYear"
                      value={formData.lastAuditYear}
                      onChange={(e) => handleInputChange('lastAuditYear', e.target.value)}
                      placeholder={t('enterprise.form.placeholder.last-audit-year')}
                    />
                  </div>
                </div>
              </div>

              {/* IPO相关信息 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">{t('enterprise.form.section.ipo-info')}</h3>
                <div className="space-y-2">
                  <Label htmlFor="ipoReason">{t('enterprise.form.ipo-reason')} *</Label>
                  <Textarea
                    id="ipoReason"
                    value={formData.ipoReason}
                    onChange={(e) => handleInputChange('ipoReason', e.target.value)}
                    placeholder={t('enterprise.form.placeholder.ipo-reason')}
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fundingPurpose">{t('enterprise.form.funding-purpose')} *</Label>
                  <Textarea
                    id="fundingPurpose"
                    value={formData.fundingPurpose}
                    onChange={(e) => handleInputChange('fundingPurpose', e.target.value)}
                    placeholder={t('enterprise.form.placeholder.funding-purpose')}
                    rows={3}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="expectedAmount">{t('enterprise.form.expected-amount')}</Label>
                    <Input
                      id="expectedAmount"
                      value={formData.expectedAmount}
                      onChange={(e) => handleInputChange('expectedAmount', e.target.value)}
                      placeholder={t('enterprise.form.placeholder.expected-amount')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expectedTimeline">{t('enterprise.form.expected-timeline')}</Label>
                    <Input
                      id="expectedTimeline"
                      value={formData.expectedTimeline}
                      onChange={(e) => handleInputChange('expectedTimeline', e.target.value)}
                      placeholder={t('enterprise.form.placeholder.expected-timeline')}
                    />
                  </div>
                </div>
              </div>

              {/* 法律合规 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">{t('enterprise.form.section.legal-info')}</h3>
                <div className="space-y-2">
                  <Label htmlFor="legalIssues">{t('enterprise.form.legal-issues')}</Label>
                  <Textarea
                    id="legalIssues"
                    value={formData.legalIssues}
                    onChange={(e) => handleInputChange('legalIssues', e.target.value)}
                    placeholder={t('enterprise.form.placeholder.legal-issues')}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="complianceStatus">{t('enterprise.form.compliance-status')}</Label>
                  <Textarea
                    id="complianceStatus"
                    value={formData.complianceStatus}
                    onChange={(e) => handleInputChange('complianceStatus', e.target.value)}
                    placeholder={t('enterprise.form.placeholder.compliance-status')}
                    rows={3}
                  />
                </div>
              </div>

              {/* 其他信息 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">{t('enterprise.form.section.additional-info')}</h3>
                <div className="space-y-2">
                  <Label htmlFor="competitiveAdvantage">{t('enterprise.form.competitive-advantages')} *</Label>
                  <Textarea
                    id="competitiveAdvantage"
                    value={formData.competitiveAdvantage}
                    onChange={(e) => handleInputChange('competitiveAdvantage', e.target.value)}
                    placeholder={t('enterprise.form.placeholder.competitive-advantages')}
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="riskFactors">{t('enterprise.form.risk-factors')}</Label>
                  <Textarea
                    id="riskFactors"
                    value={formData.riskFactors}
                    onChange={(e) => handleInputChange('riskFactors', e.target.value)}
                    placeholder={t('enterprise.form.placeholder.risk-factors')}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">{t('enterprise.form.additional-info')}</Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    placeholder={t('enterprise.form.placeholder.additional-info')}
                    rows={3}
                  />
                </div>
              </div>

              {/* 文件确认 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">{t('enterprise.form.section.documents')}</h3>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="documentsReady"
                    checked={formData.documentsReady}
                    onCheckedChange={(checked) => handleInputChange('documentsReady', checked as boolean)}
                  />
                  <Label htmlFor="documentsReady" className="text-sm">
                    {t('enterprise.form.documents-ready.label')}
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-6">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="btn-premium min-w-[200px]"
                >
                  {isSubmitting ? t('common.loading') : t('enterprise.form.submit')}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnterpriseForm;