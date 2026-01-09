import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Users, Award, BarChart3, PieChart, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t, currentLanguage } = useLanguage();
  const [heroBackgroundImage, setHeroBackgroundImage] = useState<string | null>(null);

  const services = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: t('services.financial-consulting.title'),
      description: t('services.financial-consulting.description'),
    },
    {
      icon: <PieChart className="h-8 w-8 text-primary" />,
      title: t('services.investment-management.title'),
      description: t('services.investment-management.description'),
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: t('services.risk-assessment.title'),
      description: t('services.risk-assessment.description'),
    },
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: t('services.corporate-finance.title'),
      description: t('services.corporate-finance.description'),
    },
  ];

  const stats = [
    { number: t('stats.transactions.number'), label: t('stats.transactions.label') },
    { number: t('stats.timeline.number'), label: t('stats.timeline.label') },
    { number: t('stats.founded.number'), label: t('stats.founded.label') },
    { number: t('stats.offices.number'), label: t('stats.offices.label') },
  ];

  // Load hero background image from admin dashboard
  useEffect(() => {
    const loadHeroImage = () => {
      try {
        const savedContent = localStorage.getItem(`websiteContent_${currentLanguage}`);
        if (savedContent) {
          const content = JSON.parse(savedContent);
          if (content.heroBackgroundImage) {
            setHeroBackgroundImage(content.heroBackgroundImage);
          }
        }
      } catch (error) {
        console.error('Error loading hero background image:', error);
      }
    };

    loadHeroImage();

    // Listen for storage changes (when admin updates image)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === `websiteContent_${currentLanguage}` && e.newValue) {
        try {
          const content = JSON.parse(e.newValue);
          if (content.heroBackgroundImage) {
            setHeroBackgroundImage(content.heroBackgroundImage);
          }
        } catch (error) {
          console.error('Error parsing updated content:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [currentLanguage]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        {heroBackgroundImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${heroBackgroundImage})` }}
          ></div>
        )}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                <span className="gradient-text">{t('hero.title')}</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6">
                {t('hero.subtitle')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/enterprise-form">
                  <Button size="lg" className="btn-premium group">
                    {t('hero.cta.primary')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    {t('hero.cta.secondary')}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559209537-dafe2fe2886b?w=600&auto=format&fit=crop&q=80"
                  alt="Modern Financial Office"
                  className="rounded-2xl shadow-2xl card-elegant"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg card-elegant">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-8 w-8 text-green-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Portfolio Growth</p>
                      <p className="text-2xl font-bold text-green-500">+24.5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1758518727613-00192aed759b?w=600&auto=format&fit=crop&q=80"
                alt="Business Meeting"
                className="rounded-2xl shadow-xl card-elegant"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('about.description')}
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('about.mission.title')}</h3>
                    <p className="text-muted-foreground">{t('about.mission.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('about.vision.title')}</h3>
                    <p className="text-muted-foreground">{t('about.vision.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get started with our comprehensive financial assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enterprise-form">
              <Button size="lg" variant="secondary" className="group">
                Start Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
