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
      title: 'Professional Excellence',
      description: 'Delivering world-class IPO and market cap management services with uncompromising quality and precision.',
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: 'Global Reach',
      description: 'Serving clients across multiple countries with offices in Hong Kong, London, Shenzhen, Guangzhou, and Hefei.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: 'Innovation Leadership',
      description: 'Pioneering advanced fintech solutions and quantitative trading models for optimal market performance.',
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: 'Client Focus',
      description: 'Committed to helping enterprises break through listing barriers and achieve sustainable growth.',
    },
  ];

  const milestones = [
    { year: '2017', event: 'FTSE Finance established in Hong Kong, focusing on cross-border investment and financing' },
    { year: '2020', event: 'Expanded services to include comprehensive IPO solutions and market cap management' },
    { year: '2022', event: 'Achieved over $50 billion in completed transactions across multiple sectors' },
    { year: '2024', event: 'Headquarters relocated to London, strengthening global presence and capabilities' },
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
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative partner for enterprise US stock listing and market value management
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
                About FTSE Finance
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
                  With cutting-edge fintech and professional service teams, we help companies break through listing barriers, 
                  utilize fundraising capabilities and proprietary funds to build efficient market cap management systems, 
                  empowering sustainable enterprise growth.
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
                  To be the leading partner for Chinese private enterprises and overseas companies in cross-border investment, 
                  financing, and listing, creating unique value for clients and helping enterprises succeed in capital markets.
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
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our commitment to excellence and innovation
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
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals with diverse backgrounds and proven track records
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
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Background</h4>
                    <p className="text-sm">{member.background}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Expertise</h4>
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
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in our evolution as a leading IPO and market cap management partner
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
              Global Presence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic locations to serve our clients worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <Building className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-xl font-bold text-foreground mb-2">London</div>
                <div className="text-muted-foreground">Global Headquarters</div>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-xl font-bold text-foreground mb-2">Hong Kong</div>
                <div className="text-muted-foreground">Asia Pacific Hub</div>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-xl font-bold text-foreground mb-2">Shenzhen</div>
                <div className="text-muted-foreground">China Operations</div>
              </CardContent>
            </Card>
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-xl font-bold text-foreground mb-2">$50B+</div>
                <div className="text-muted-foreground">Transactions Completed</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;