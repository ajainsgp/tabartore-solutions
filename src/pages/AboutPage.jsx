import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe2, Users, Award, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.tabartore.com/#organization",
  "name": "Tabartore Solutions Limited",
  "url": "https://www.tabartore.com/about",
  "logo": "https://horizons-cdn.hostinger.com/a14be0c0-7113-4bf7-8616-d2ee185ce4b9/f2975c139dfc93f0754e5e457b4b3144.png",
  "description": "Enterprise consulting for mission-critical projects in Oracle, AI, and full-stack systems across Europe.",
  "foundingDate": "2009",
  "areaServed": ["Ireland", "United Kingdom", "Europe"],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IE"
  },
  "knowsAbout": [
    "Oracle EBS R12",
    "Oracle Fusion Cloud",
    "Oracle Data Migration",
    "Oracle Integration Cloud",
    "Oracle APEX",
    "Enterprise AI",
    "Generative AI",
    "Full-Stack Development"
  ],
  "sameAs": [
    "https://www.linkedin.com/company/tabartore-solutions"
  ]
  };

  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: '15+ Years Experience',
      description: 'Proven track record in enterprise consulting across multiple industries and geographies'
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Operating across UK, Ireland, and Europe with international project experience'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Leadership',
      description: 'Experienced in leading teams and coordinating global development efforts'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission-Critical Focus',
      description: 'Specialized in complex, high-stakes projects requiring precision and expertise'
    }
  ];

  const expertise = [
    'Customer-facing consulting with strong client relationship management',
    'Full-stack development from frontend to backend infrastructure',
    'Enterprise systems integration',
    'Our Proprietary Data Migration Tool',
    'Cloud infrastructure and modern DevOps practices',
    'AI and machine learning implementation',
    'Team coordination across multiple time zones'
  ];

  return (
    <>
      <Helmet>
        <title>About Tabartore Solutions | Oracle & AI Consulting Experts</title>
        <meta name="description" content="About Tabartore Solutions: 15+ years of Oracle consulting and AI expertise. Serving enterprise clients in the UK, Ireland, and Europe for mission-critical projects." />
        <meta name="keywords" content="Oracle consulting company, Oracle EBS experts, Oracle Fusion SaaS, enterprise AI consulting, Tabartore Solutions Limited" />
        <meta property="og:title" content="About Tabartore Solutions | Oracle & AI Consulting Experts" />
        <meta property="og:description" content="15+ years of enterprise consulting experience across UK, Ireland, and Europe. Expert team ready to tackle complex, mission-critical projects." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.tabartore.com/about" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1681184025442-1517cb9319c1" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.tabartore.com/about" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1681184025442-1517cb9319c1"
            alt="Professional team collaboration in enterprise consulting environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Tabartore Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Delivering excellence in enterprise consulting with over 15+ years of specialized expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Your Partner in Complex Enterprise Solutions
              </h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  With over <strong className="text-blue-600">15+ years of consulting experience</strong>, Tabartore Solutions Limited has established itself as a trusted partner for organizations tackling their most complex and mission-critical projects.
                </p>
                <p>
                  Our journey spans across the <strong className="text-blue-600">UK, Ireland, and Europe</strong>, delivering solutions that combine deep technical expertise with practical business acumen. We've worked in both customer-facing and development environments, giving us a unique perspective on what it takes to deliver successful enterprise projects.
                </p>
                <p>
                  From traditional Oracle enterprise systems to cutting-edge AI implementations, our full-stack capabilities enable us to handle every aspect of your technology needs—from initial architecture to cloud infrastructure deployment.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border border-slate-200 hover:border-blue-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Core Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-200 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* AI Resources Callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready for AI Innovation
              </h2>
              <p className="text-lg text-purple-100 leading-relaxed">
                We maintain dedicated resources and expertise for AI-related projects, including generative AI, machine learning implementations, and intelligent automation. Our team stays current with the latest developments in artificial intelligence to deliver cutting-edge solutions.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-white rounded-2xl shadow-xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Tackle Your Next Challenge?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              We're prepared to engage on your most complex, mission-critical projects. Let's discuss how we can help you succeed.
            </p>
            <Link to="/contact" aria-label="Get in touch to discuss your project">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group"
              >
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;