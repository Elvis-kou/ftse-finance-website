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
      title: t('services.ipo.title'),
      description: t('services.ipo.description'),
      features: [
        t('services.ipo.feature1'),
        t('services.ipo.feature2'),
        t('services.ipo.feature3'),
        t('services.ipo.feature4')
      ],
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: t('services.market.title'),
      description: t('services.market.description'),
      features: [
        t('services.market.feature1'),
        t('services.market.feature2'),
        t('services.market.feature3'),
        t('services.market.feature4')
      ],
    },
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: t('services.investment.title'),
      description: t('services.investment.description'),
      features: [
        t('services.investment.feature1'),
        t('services.investment.feature2'),
        t('services.investment.feature3'),
        t('services.investment.feature4')
      ],
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: t('services.support.title'),
      description: t('services.support.description'),
      features: [
        t('services.support.feature1'),
        t('services.support.feature2'),
        t('services.support.feature3'),
        t('services.support.feature4')
      ],
    },
    {
      icon: <Calculator className="h-10 w-10 text-primary" />,
      title: t('services.risk.title'),
      description: t('services.risk.description'),
      features: [
        t('services.risk.feature1'),
        t('services.risk.feature2'),
        t('services.risk.feature3'),
        t('services.risk.feature4')
      ],
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: t('services.fintech.title'),
      description: t('services.fintech.description'),
      features: [
        t('services.fintech.feature1'),
        t('services.fintech.feature2'),
        t('services.fintech.feature3'),
        t('services.fintech.feature4')
      ],
    },
  ];

  const industries = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: t('services.industries.crypto.title'),
      description: t('services.industries.crypto.description'),
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: t('services.industries.nev.title'),
      description: t('services.industries.nev.description'),
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: t('services.industries.medical.title'),
      description: t('services.industries.medical.description'),
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: t('services.industries.ai.title'),
      description: t('services.industries.ai.description'),
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t('services.industries.education.title'),
      description: t('services.industries.education.description'),
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: t('services.industries.tech.title'),
      description: t('services.industries.tech.description'),
    },
  ];

  const processSteps = [
    {
      phase: t('services.process.pre.title'),
      steps: [
        t('services.process.pre.step1'),
        t('services.process.pre.step2'),
        t('services.process.pre.step3'),
        t('services.process.pre.step4'),
        t('services.process.pre.step5')
      ]
    },
    {
      phase: t('services.process.implementation.title'), 
      steps: [
        t('services.process.implementation.step1'),
        t('services.process.implementation.step2'),
        t('services.process.implementation.step3'),
        t('services.process.implementation.step4'),
        t('services.process.implementation.step5')
      ]
    },
    {
      phase: t('services.process.post.title'),
      steps: [
        t('services.process.post.step1'),
        t('services.process.post.step2'),
        t('services.process.post.step3'),
        t('services.process.post.step4'),
        t('services.process.post.step5')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('services.backToHome')}
          </Link>
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('services.core.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.core.description')}
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
              {t('services.process.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.process.description')}
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
              {t('services.industries.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.industries.description')}
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
                {t('services.advantages.title')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('services.advantages.trackRecord.title')}</h3>
                    <p className="text-muted-foreground">{t('services.advantages.trackRecord.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('services.advantages.timeline.title')}</h3>
                    <p className="text-muted-foreground">{t('services.advantages.timeline.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('services.advantages.capital.title')}</h3>
                    <p className="text-muted-foreground">{t('services.advantages.capital.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('services.advantages.custom.title')}</h3>
                    <p className="text-muted-foreground">{t('services.advantages.custom.description')}</p>
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
              {t('services.nasdaq.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.nasdaq.description')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-lg font-bold text-foreground mb-2">{t('services.nasdaq.flexible.title')}</div>
                <div className="text-sm text-muted-foreground">{t('services.nasdaq.flexible.description')}</div>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-lg font-bold text-foreground mb-2">{t('services.nasdaq.costs.title')}</div>
                <div className="text-sm text-muted-foreground">{t('services.nasdaq.costs.description')}</div>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-lg font-bold text-foreground mb-2">{t('services.nasdaq.market.title')}</div>
                <div className="text-sm text-muted-foreground">{t('services.nasdaq.market.description')}</div>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <Building className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-lg font-bold text-foreground mb-2">{t('services.nasdaq.ma.title')}</div>
                <div className="text-sm text-muted-foreground">{t('services.nasdaq.ma.description')}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('services.cta.title')}
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            {t('services.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enterprise-form">
              <Button size="lg" variant="secondary">
                {t('services.cta.button1')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                {t('services.cta.button2')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;