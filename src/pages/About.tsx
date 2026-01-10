import React from 'react';
import { ArrowLeft, Award, Users, Globe, TrendingUp, Shield, Target, Building, DollarSign, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: t('about.values.professional.title'),
      description: t('about.values.professional.description'),
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: t('about.values.global.title'),
      description: t('about.values.global.description'),
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: t('about.values.client.title'),
      description: t('about.values.client.description'),
    },
  ];

  const milestones = [
    { year: '2017', event: t('about.milestones.2017') },
    { year: '2020', event: t('about.milestones.2020') },
    { year: '2022', event: t('about.milestones.2022') },
    { year: '2024', event: t('about.milestones.2024') },
  ];

  const teamMembers = [
    {
      name: 'Queenie',
      position: 'CEO',
      background: 'Bachelor in Journalism from Communication University of China, EMBA from HSBC Business School. 20 years of investment management experience.',
      expertise: 'Real estate, stocks, funds, trusts, futures and derivatives'
    },
    {
      name: 'Jayden',
      position: 'COO', 
      background: 'MBA from University of Miami Herbert Business School. 14 years in financial industry.',
      expertise: 'Capital market transactions, IPOs, PIPE, SPAC, and reverse mergers'
    },
    {
      name: 'Calvin',
      position: 'Fund Manager',
      background: 'Applied Mathematics background, MBA from Pace University New York.',
      expertise: 'Investment analysis, data modeling, and institutional asset management'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('about.backToHome')}
          </Link>
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.overview.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {t('about.overview.title')}
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  {t('about.company.overview')}
                </p>
                <p>
                  {t('about.global.presence')}
                </p>
                <p>
                  {t('about.expertise')}
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1643391448862-881a06885f90?w=600&auto=format&fit=crop&q=80"
                alt="FTSE Finance Building"
                className="rounded-2xl shadow-xl card-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-elegant">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">{t('about.mission.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg">
                  {t('about.mission.description')}
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="card-elegant">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">{t('about.vision.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg">
                  {t('about.vision.description')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.values.description')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-elegant text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.team.description')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{member.position}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">{t('about.team.background')}</h4>
                    <p className="text-sm">{member.background}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">{t('about.team.expertise')}</h4>
                    <p className="text-sm">{member.expertise}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('about.journey.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('about.journey.description')}
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <Card className="card-elegant">
                    <CardContent className="pt-6">
                      <p className="text-lg text-muted-foreground">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('about.presence.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.presence.description')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <Building className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-xl font-bold text-foreground mb-2">{t('about.presence.london')}</div>
                <div className="text-muted-foreground">{t('about.presence.london.label')}</div>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-xl font-bold text-foreground mb-2">{t('about.presence.hongkong')}</div>
                <div className="text-muted-foreground">{t('about.presence.hongkong.label')}</div>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-xl font-bold text-foreground mb-2">{t('about.presence.shenzhen')}</div>
                <div className="text-muted-foreground">{t('about.presence.shenzhen.label')}</div>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-xl font-bold text-foreground mb-2">{t('stats.transactions.number')}</div>
                <div className="text-muted-foreground">{t('stats.transactions.label')}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;