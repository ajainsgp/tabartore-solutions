import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Brain, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataMigrationTool from '@/components/DataMigrationTool';

  const HomePage = () => {
    const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.tabartore.com/#organization",
    "name": "Tabartore Solutions Limited",
    "url": "https://www.tabartore.com",
      "logo": "https://horizons-cdn.hostinger.com/a14be0c0-7113-4bf7-8616-d2ee185ce4b9/f2975c139dfc93f0754e5e457b4b3144.png",
    "brand": {
      "@type": "Brand",
      "name": "Tabartore Solutions"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "United Kingdom" },
      { "@type": "AdministrativeArea", "name": "Ireland" },
      { "@type": "AdministrativeArea", "name": "Europe" }
    ],
    "serviceType": [
      "Oracle EBS R12 Consulting",
      "Oracle EBS Data Migration",
      "Oracle Fusion Data Migration",
      "Oracle APEX",
      "Enterprise AI Solutions",
      "Freelance Oracle Consulting"
      ],
    "knowsAbout": [
      "Oracle E-Business Suite R12",
      "Oracle Fusion Cloud",
      "Oracle Integration Cloud",
      "Oracle Data Migration",
      "Oracle APEX",
      "GenAI",
      "Enterprise AI",
      "Full Stack Development"
    ],
    "description": "Enterprise consulting for complex, mission-critical projects specializing in Oracle EBS R12, Fusion Cloud, AI, and full-stack development.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Business Inquiries",
      "url": "https://www.tabartore.com/contact"
    },
    "sameAs": [
      "https://www.linkedin.com/company/tabartore-solutions"
    ]
  };

  const services = [
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Oracle Technologies',
      description: 'Enterprise systems expertise across Fusion SaaS, eBusiness Suite, and Oracle Database',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'AI & Generative AI',
      description: 'Modern AI solutions including embeddings, semantic search, and RAG applications',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Full-Stack Development',
      description: 'End-to-end solutions with React, Node.js, and comprehensive web technologies',
      gradient: 'from-emerald-600 to-teal-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Oracle Consulting & AI Solutions | Tabartore Solutions Limited</title>
        <meta name="description" content="Expert Oracle consulting, AI solutions, and data migration services for mission-critical projects in the UK, Ireland, and Europe. 15+ years experience." />
        <meta name="keywords" content="Oracle consulting, AI consulting, oracle data migration services, Oracle Fusion SaaS, Oracle eBusiness Suite, UK, Ireland, Europe, Full-stack development" />
        <meta property="og:title" content="Oracle Consulting & AI Solutions | Tabartore Solutions Limited" />
        <meta property="og:description" content="Expert Oracle consulting and AI solutions for mission-critical projects. Serving UK, Ireland, and Europe with 15+ years experience." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1629787155650-9ce3697dcb38" />
        <meta property="og:url" content="https://www.tabartore.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oracle Consulting & AI Solutions | Tabartore Solutions" />
        <meta name="twitter:description" content="Expert Oracle consulting and AI solutions. Serving UK, Ireland, and Europe." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1629787155650-9ce3697dcb38" />
        <link rel="canonical" href="https://www.tabartore.com/" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1629787155650-9ce3697dcb38"
            alt="Enterprise technology background showing Oracle and AI consulting themes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Consulting for{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Oracle EBS R12, Fusion & Mission-Critical Projects
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 font-light"
            >
              Tabartore Solutions provides Oracle EBS R12 & Fusion SaaS consulting, Oracle EBS & Fusion Cloud data migration, enterprise AI solutions, and freelance Oracle services for complex, mission-critical implementations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/contact" aria-label="Start your Oracle or AI project today">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Consulting Services, Data Migration & AI Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions across enterprise technologies and modern innovations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border border-slate-200 hover:border-transparent">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Link to="/services" aria-label="Explore all our consulting services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 group"
              >
                Explore All Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Proprietary Tool Section */}
      <DataMigrationTool />

    </>
  );
};

export default HomePage;