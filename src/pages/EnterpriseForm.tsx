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
        status: 'New Application'
      };
      submissions.push(newSubmission);
      localStorage.setItem('enterpriseSubmissions', JSON.stringify(submissions));
      
      toast({
        title: 'Application Submitted Successfully',
        description: 'We will contact you within 24 hours to discuss your IPO requirements.',
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
        title: 'Submission Failed',
        description: 'Please try again later or contact us directly.',
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
            Back to Home
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('enterprise.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            Please provide comprehensive enterprise information for our IPO assessment and consultation services.
          </p>
        </div>

        {/* Form */}
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              Enterprise IPO Information Collection Form
            </CardTitle>
            <CardDescription>
              Complete all sections to help us provide the most accurate IPO consultation and services.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* 基本企业信息 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Basic Company Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name (Chinese) *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder="公司中文名称"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyNameEn">Company Name (English) *</Label>
                    <Input
                      id="companyNameEn"
                      value={formData.companyNameEn}
                      onChange={(e) => handleInputChange('companyNameEn', e.target.value)}
                      placeholder="Company English Name"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber">Business Registration Number *</Label>
                    <Input
                      id="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                      placeholder="营业执照注册号"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="establishedDate">Established Date *</Label>
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
                  <Label htmlFor="registeredAddress">Registered Address *</Label>
                  <Input
                    id="registeredAddress"
                    value={formData.registeredAddress}
                    onChange={(e) => handleInputChange('registeredAddress', e.target.value)}
                    placeholder="公司注册地址"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessAddress">Business Address</Label>
                    <Input
                      id="businessAddress"
                      value={formData.businessAddress}
                      onChange={(e) => handleInputChange('businessAddress', e.target.value)}
                      placeholder="实际经营地址"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Company Website</Label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      placeholder="https://www.company.com"
                    />
                  </div>
                </div>
              </div>

              {/* 行业与业务信息 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Industry & Business Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
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
                  <Label htmlFor="businessScope">Business Scope *</Label>
                  <Textarea
                    id="businessScope"
                    value={formData.businessScope}
                    onChange={(e) => handleInputChange('businessScope', e.target.value)}
                    placeholder="Describe your company's business scope and activities..."
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mainProducts">Main Products/Services *</Label>
                  <Textarea
                    id="mainProducts"
                    value={formData.mainProducts}
                    onChange={(e) => handleInputChange('mainProducts', e.target.value)}
                    placeholder="Describe your main products or services..."
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessModel">Business Model *</Label>
                  <Textarea
                    id="businessModel"
                    value={formData.businessModel}
                    onChange={(e) => handleInputChange('businessModel', e.target.value)}
                    placeholder="Describe your business model and revenue streams..."
                    rows={3}
                    required
                  />
                </div>
              </div>

              {/* 规模信息 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Company Scale & Financial Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="employees">
                      <Users className="h-4 w-4 inline mr-2" />
                      Number of Employees *
                    </Label>
                    <Select value={formData.employees} onValueChange={(value) => handleInputChange('employees', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select employee count" />
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
                      Annual Revenue *
                    </Label>
                    <Select value={formData.revenue} onValueChange={(value) => handleInputChange('revenue', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select revenue range" />
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
                    <Label htmlFor="netProfit">Net Profit (Last Year)</Label>
                    <Input
                      id="netProfit"
                      value={formData.netProfit}
                      onChange={(e) => handleInputChange('netProfit', e.target.value)}
                      placeholder="$10M"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="totalAssets">Total Assets</Label>
                    <Input
                      id="totalAssets"
                      value={formData.totalAssets}
                      onChange={(e) => handleInputChange('totalAssets', e.target.value)}
                      placeholder="$50M"
                    />
                  </div>
                </div>
              </div>

              {/* 联系信息 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position/Title *</Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      placeholder="CEO, CFO, etc."
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      <Phone className="h-4 w-4 inline mr-2" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      <Mail className="h-4 w-4 inline mr-2" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="contact@company.com"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* 股权结构 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Ownership Structure</h3>
                <div className="space-y-2">
                  <Label htmlFor="shareholderStructure">Shareholder Structure *</Label>
                  <Textarea
                    id="shareholderStructure"
                    value={formData.shareholderStructure}
                    onChange={(e) => handleInputChange('shareholderStructure', e.target.value)}
                    placeholder="Describe the current shareholder structure and ownership percentages..."
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="majorShareholders">Major Shareholders (&gt;5%)</Label>
                  <Textarea
                    id="majorShareholders"
                    value={formData.majorShareholders}
                    onChange={(e) => handleInputChange('majorShareholders', e.target.value)}
                    placeholder="List major shareholders and their ownership percentages..."
                    rows={3}
                  />
                </div>
              </div>

              {/* 财务与审计信息 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Financial & Audit Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="auditFirm">Audit Firm</Label>
                    <Input
                      id="auditFirm"
                      value={formData.auditFirm}
                      onChange={(e) => handleInputChange('auditFirm', e.target.value)}
                      placeholder="Name of auditing firm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastAuditYear">Last Audit Year</Label>
                    <Input
                      id="lastAuditYear"
                      value={formData.lastAuditYear}
                      onChange={(e) => handleInputChange('lastAuditYear', e.target.value)}
                      placeholder="2023"
                    />
                  </div>
                </div>
              </div>

              {/* IPO相关信息 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">IPO Related Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="ipoReason">Reason for IPO *</Label>
                  <Textarea
                    id="ipoReason"
                    value={formData.ipoReason}
                    onChange={(e) => handleInputChange('ipoReason', e.target.value)}
                    placeholder="Explain why your company wants to go public..."
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fundingPurpose">Use of Funds *</Label>
                  <Textarea
                    id="fundingPurpose"
                    value={formData.fundingPurpose}
                    onChange={(e) => handleInputChange('fundingPurpose', e.target.value)}
                    placeholder="How will the IPO funds be used? (R&D, expansion, debt repayment, etc.)"
                    rows={3}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="expectedAmount">Expected Funding Amount</Label>
                    <Input
                      id="expectedAmount"
                      value={formData.expectedAmount}
                      onChange={(e) => handleInputChange('expectedAmount', e.target.value)}
                      placeholder="$100M"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expectedTimeline">Expected IPO Timeline</Label>
                    <Input
                      id="expectedTimeline"
                      value={formData.expectedTimeline}
                      onChange={(e) => handleInputChange('expectedTimeline', e.target.value)}
                      placeholder="12-18 months"
                    />
                  </div>
                </div>
              </div>

              {/* 法律合规 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Legal & Compliance</h3>
                <div className="space-y-2">
                  <Label htmlFor="legalIssues">Legal Issues or Litigation</Label>
                  <Textarea
                    id="legalIssues"
                    value={formData.legalIssues}
                    onChange={(e) => handleInputChange('legalIssues', e.target.value)}
                    placeholder="Describe any ongoing or potential legal issues..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="complianceStatus">Compliance Status</Label>
                  <Textarea
                    id="complianceStatus"
                    value={formData.complianceStatus}
                    onChange={(e) => handleInputChange('complianceStatus', e.target.value)}
                    placeholder="Current compliance status with relevant regulations..."
                    rows={3}
                  />
                </div>
              </div>

              {/* 其他信息 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Additional Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="competitiveAdvantage">Competitive Advantages *</Label>
                  <Textarea
                    id="competitiveAdvantage"
                    value={formData.competitiveAdvantage}
                    onChange={(e) => handleInputChange('competitiveAdvantage', e.target.value)}
                    placeholder="What makes your company unique in the market?"
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="riskFactors">Risk Factors</Label>
                  <Textarea
                    id="riskFactors"
                    value={formData.riskFactors}
                    onChange={(e) => handleInputChange('riskFactors', e.target.value)}
                    placeholder="Identify potential risks to your business..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    placeholder="Any other information you'd like to share..."
                    rows={3}
                  />
                </div>
              </div>

              {/* 文件确认 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Document Preparation</h3>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="documentsReady"
                    checked={formData.documentsReady}
                    onCheckedChange={(checked) => handleInputChange('documentsReady', checked as boolean)}
                  />
                  <Label htmlFor="documentsReady" className="text-sm">
                    I confirm that we have prepared or can provide the necessary documents including financial statements, 
                    business licenses, audit reports, and other required documentation for IPO consultation.
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
                  {isSubmitting ? t('common.loading') : 'Submit IPO Application'}
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