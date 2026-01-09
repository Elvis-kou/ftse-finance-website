import React from 'react';
import { ArrowLeft, BarChart3, TrendingUp, Building, Shield, Calculator, Zap, DollarSign, Users, Globe, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: 'IPO Comprehensive Solutions',
      description: 'Full-process IPO services from preparation to implementation, typically completed within 9-12 months.',
      features: ['Due diligence and compliance', 'SEC registration materials', 'Roadshow assistance', 'Market timing optimization'],
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: 'Market Cap Management',
      description: 'Advanced liquidity management tools and market value stabilization strategies for post-listing performance.',
      features: ['Quantitative trading models', 'Liquidity enhancement strategies', 'Stock price stabilization', 'Multi-account hedging'],
    },
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: 'Investment Banking Services',
      description: 'Corporate financing, M&A restructuring, and comprehensive capital market operations.',
      features: ['Mergers & acquisitions', 'Project financing', 'Strategic consulting', 'Structured products'],
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Post-Listing Support',
      description: 'Investor relations management, compliance consulting, refinancing, and strategic advisory services.',
      features: ['Investor relations management', 'Compliance consulting', 'Refinancing solutions', 'Reverse mergers'],
    },
    {
      icon: <Calculator className="h-10 w-10 text-primary" />,
      title: 'Risk Management',
      description: 'Professional risk assessment and mitigation strategies for all stages of the listing process.',
      features: ['Financial risk assessment', 'Legal compliance review', 'Regulatory risk management', 'Market risk analysis'],
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: 'Fintech Solutions',
      description: 'Cutting-edge financial technology solutions for enhanced market performance and efficiency.',
      features: ['Algorithmic trading systems', 'Data-driven analytics', 'Automated compliance tools', 'Real-time monitoring'],
    },
  ];

  const industries = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: 'Cryptocurrency & Blockchain',
      description: 'Specialized IPO services for digital asset and blockchain companies.',
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: 'New Energy Vehicles',
      description: 'Comprehensive listing solutions for electric vehicle manufacturers.',
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Medical Devices',
      description: 'Healthcare technology companies seeking US market access.',
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: 'Artificial Intelligence',
      description: 'AI and machine learning companies preparing for public offerings.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Online Education',
      description: 'EdTech platforms and educational service providers.',
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: 'Technology Enterprises',
      description: 'Software, hardware, and technology service companies.',
    },
  ];

  const processSteps = [
    {
      phase: 'Pre-Listing Preparation',
      steps: ['Cooperation agreement', 'Due diligence', 'Business model positioning', 'Financial internal control', 'Equity structure optimization']
    },
    {
      phase: 'Listing Implementation', 
      steps: ['SEC registration materials', 'Prospectus disclosure', 'CSRC filing', 'SEC Q&A responses', 'Roadshow assistance']
    },
    {
      phase: 'Post-Listing Support',
      steps: ['Market cap management', 'Refinancing solutions', 'Reduction strategies', 'M&A opportunities', 'Investor relations']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IPO and market cap management solutions designed to help enterprises succeed in US capital markets
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From IPO preparation to post-listing support, we provide end-to-end solutions for your capital market journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant h-full">
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IPO Process */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              IPO Process Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our structured approach ensures efficient and successful public offerings
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((process, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl">{process.phase}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {process.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {step}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Industry Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven track record across diverse sectors and emerging technologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="card-elegant text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-lg">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{industry.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Choose FTSE Finance?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Proven Track Record</h3>
                    <p className="text-muted-foreground">Successfully completed over $50 billion in transactions across multiple sectors including crypto, new energy, healthcare, AI, and education.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Efficient Timeline</h3>
                    <p className="text-muted-foreground">Streamlined IPO process typically completed within 9-12 months, reducing time delays and unnecessary costs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Proprietary Capital</h3>
                    <p className="text-muted-foreground">Utilize our own funds to participate in IPO subscriptions, ensuring successful issuance and market stability.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Customized Solutions</h3>
                    <p className="text-muted-foreground">Tailored listing strategies based on industry characteristics, company scale, and financial conditions to maximize enterprise value.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80"
                alt="Financial Analytics Dashboard"
                className="rounded-2xl shadow-xl card-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NASDAQ Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              NASDAQ Listing Advantages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Why US markets offer superior opportunities for growth and expansion
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-lg font-bold text-foreground mb-2">Flexible Trading System</div>
                <div className="text-sm text-muted-foreground">Less restrictive pre-approval process focused on information disclosure</div>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-lg font-bold text-foreground mb-2">Lower Listing Costs</div>
                <div className="text-sm text-muted-foreground">Comprehensive legal framework with transparent regulatory environment</div>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-lg font-bold text-foreground mb-2">Massive Capital Market</div>
                <div className="text-sm text-muted-foreground">World's largest trading volume providing significant growth potential</div>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <Building className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-lg font-bold text-foreground mb-2">M&A Opportunities</div>
                <div className="text-sm text-muted-foreground">Stock-based acquisitions to enhance business chains and market value</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Go Public?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let our experienced team guide you through the IPO process and help you achieve your capital market goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enterprise-form">
              <Button size="lg" variant="secondary">
                Start Your IPO Journey
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;