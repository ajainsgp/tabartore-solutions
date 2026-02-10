import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Database, Globe, BarChart3, Server, ArrowRight, FileText, CheckCircle2, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
const ServicesPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.tabartore.com/#organization",
      "name": "Tabartore Solutions Limited",
      "url": "https://www.tabartore.com/service",
      "logo": "https://www.tabartore.com/logo.png",
      "description": "Enterprise Oracle, AI, and data migration consulting for mission-critical projects.",
      "areaServed": ["Ireland", "United Kingdom", "Europe"],
      "sameAs": [
        "https://www.linkedin.com/company/tabartore-solutions"
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tabartore.com/services#services",
      "name": "Oracle Consulting & Data Migration Services",
      "url": "https://www.tabartore.com/services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Oracle Consulting",
          "description": "Oracle Fusion SaaS, eBusiness Suite, and Oracle Integration Cloud implementation",
          "provider": {
            "@id": "https://www.tabartore.com/#organization"
          }
        },
        {
          "@type": "Service",
          "name": "Data Migration Services",
          "description": "Automated data migration for Oracle EBS and Oracle Fusion Cloud",
          "provider": {
            "@id": "https://www.tabartore.com/#organization"
          }
        },
        {
          "@type": "Service",
          "name": "AI & Generative AI Solutions",
          "description": "Enterprise AI, embeddings, vector databases, and RAG applications",
          "provider": {
            "@id": "https://www.tabartore.com/#organization"
          }
        }
      ]
    }
    ]
  };

  const serviceCategories = [{
    icon: <Brain className="w-10 h-10" />,
    title: 'AI & Generative AI',
    description: 'Cutting-edge artificial intelligence solutions for modern enterprises',
    gradient: 'from-purple-600 to-pink-500',
    services: ['Embeddings & Vector Databases', 'Semantic Search Implementation', 'Oracle 23ai Integration', 'RAG (Retrieval-Augmented Generation) Applications', 'Natural Language Processing', 'AI Model Integration & Optimization']
  }, {
    icon: <Database className="w-10 h-10" />,
    title: 'Oracle Technologies',
    description: 'Comprehensive Oracle ecosystem expertise from cloud to on-premise',
    gradient: 'from-red-600 to-orange-500',
    services: ['Oracle Fusion SaaS Implementation', 'BI Publisher & OTBI Reporting', 'Oracle Integration Cloud (OIC)', 'Oracle eBusiness Suite', 'Oracle Forms & Reports', 'Oracle APEX Development']
  }, {
    icon: <Globe className="w-10 h-10" />,
    title: 'Web Technologies',
    description: 'Full-stack development with modern frameworks and tools',
    gradient: 'from-emerald-600 to-teal-500',
    services: ['React & React Native Development', 'Node.js Backend Development', 'JavaScript & TypeScript', 'Oracle JET Framework', 'RESTful API Design & Development', 'Progressive Web Applications (PWA)']
  }, {
    icon: <BarChart3 className="w-10 h-10" />,
    title: 'Data & Analytics',
    description: 'Strategic data solutions and business intelligence',
    gradient: 'from-blue-600 to-cyan-500',
    services: ['Data Architecture & Modeling', 'ETL Process Development', 'Data Migration & Integration', 'Performance Tuning & Optimization', 'Business Intelligence Solutions', 'Data Warehouse Design']
  }, {
    icon: <Server className="w-10 h-10" />,
    title: 'Database Technologies',
    description: 'Enterprise database management and development',
    gradient: 'from-indigo-600 to-purple-500',
    services: ['Oracle Database Administration', 'Advanced SQL Development', 'PL/SQL Programming', 'MySQL Database Solutions', 'Database Security & Compliance', 'Cloud Database Migration']
  }];
  return <>
      <Helmet>
        <title>Oracle Consulting, AI & Data Migration Services | Tabartore Solutions</title>
        <meta name="description" content="Comprehensive enterprise services: Oracle eBusiness Suite, Fusion SaaS, AI consulting, Data Migration tools, and Full-Stack Development in UK, Ireland, Europe." />
        <meta name="keywords" content="Oracle consulting services, Oracle EBS, Fusion SaaS data migration, Oracle Integration Cloud, AI consulting, Oracle APEX, Full Stack development, UK Ireland Europe" />
        <meta property="og:title" content="Oracle Consulting, AI & Data Migration Services | Tabartore Solutions" />
        <meta property="og:description" content="Expert services in Oracle technologies, AI implementation, and complex data migration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tabartore.com/services" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1665919094867-51f5aca01346" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.tabartore.com/services" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1665919094867-51f5aca01346" alt="Technology services background featuring Oracle and AI data visualization" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive solutions across AI, Oracle ecosystem, web development, and data technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Service: Data Migration Tool */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background with gradient and patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 z-0"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm mb-6">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 font-semibold text-sm tracking-wide uppercase">Proprietary Solution</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Data Migration Tool
              <span className="block text-xl md:text-2xl mt-3 font-light text-blue-200">
                for Oracle eBusiness Suite & Oracle Fusion SaaS
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade data migration tool delivering significant time and cost savings. 
              A proven, reusable solution designed specifically for complex transformation projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Feature 1 */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} whileHover={{
            y: -10,
            scale: 1.02
          }} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 shadow-xl group">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">CV040 Extract File Generation</h3>
              <p className="text-blue-100/80 leading-relaxed">
                Automated generation of file layout documents, ensuring accuracy, consistency, and compliance across all data extracts.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} whileHover={{
            y: -10,
            scale: 1.02
          }} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 shadow-xl group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Pre-Validation Report</h3>
              <p className="text-blue-100/80 leading-relaxed">
                Comprehensive data validation prior to transform, identifying quality issues early to prevent costly migration failures.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} whileHover={{
            y: -10,
            scale: 1.02
          }} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 shadow-xl group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Transform</h3>
              <p className="text-blue-100/80 leading-relaxed">Data transformation prior to loading, identifying which fields need mapping. Define mapping rules to automate the process before final load.</p>
          </motion.div>

            {/* Feature 4 */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} whileHover={{
            y: -10,
            scale: 1.02
          }} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 shadow-xl group">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Load</h3>
              <p className="text-blue-100/80 leading-relaxed">Data loading to Oracle Applications. This will finally load data calling APIs and provide the final report of loading statistics.</p>
          </motion.div>
            
          {/* Feature 5 */}
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} whileHover={{
            y: -10,
            scale: 1.02
          }} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 shadow-xl group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Reconcile</h3>
              <p className="text-blue-100/80 leading-relaxed">
                Detailed reconciliation reporting to rigorously verify data integrity, completeness, and accuracy after the migration process.
              </p>
            </motion.div>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} className="text-center">
            <Link to="/contact" aria-label="Inquire about our Data Migration Tool">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 text-lg group transition-all duration-300">
                Inquire About Data Migration Tool
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Explore Our Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Delivering specialized consulting across these key technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {serviceCategories.map((category, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} whileHover={{
            scale: 1.02,
            y: -5
          }} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border border-slate-200 hover:border-transparent">
                  {/* Icon and Title */}
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Services List */}
                  <ul className="space-y-3">
                    {category.services.map((service, idx) => <motion.li key={idx} initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.4,
                  delay: index * 0.1 + idx * 0.05
                }} className="flex items-start">
                        <div className={`w-2 h-2 bg-gradient-to-br ${category.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-slate-700 leading-relaxed">{service}</span>
                      </motion.li>)}
                  </ul>
                </div>
              </motion.div>)}
          </div>

          {/* Call to Action */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }} className="mt-16 text-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your mission-critical objectives
            </p>
            <Link to="/contact" aria-label="Start your digital transformation project">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group">
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>;
};
export default ServicesPage;