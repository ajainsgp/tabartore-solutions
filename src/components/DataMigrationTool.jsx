import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, BarChart3, ArrowRight, Layers, Clock, ShieldCheck, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DataMigrationTool = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950"></div>
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm mb-6">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 font-semibold text-sm tracking-wide uppercase">Proprietary Solution</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Data Migration Tool <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                for Oracle EBS & Fusion SaaS
              </span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Accelerate your digital transformation in the <strong>UK, Ireland, and Europe</strong> with our enterprise-grade migration utility. 
              Designed to eliminate manual errors and reduce project timelines for complex <strong>Oracle data migrations</strong>.
            </motion.p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-xl group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-900/20 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                CV040 Extract File Generation
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Automated generation of standardized file layout documents. Ensures 100% consistency across all <strong>data migration extracts</strong> and eliminates manual documentation overhead for Oracle projects.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 shadow-xl group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-900/20 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                Pre-Validation Report
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Identify and resolve data quality issues <em>before</em> the load process begins. Drastically reduces cycle times by preventing failed load attempts during <strong>database migration</strong>.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-xl group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-900/20 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                Transform
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Data transformation prior to loading, identifying which fields need mapping. Define mapping rules to automate the process before final load.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-xl group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-900/20 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                Load
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Data loading to Oracle Applications. This will finally load data calling APIs and provide the final report of loading statistics.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-xl group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-900/20 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                Reconcile
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Automated auditing and reconciliation reporting. Provides immediate verification of data integrity, completeness, and accuracy post-migration for <strong>Oracle Fusion & EBS</strong>.
              </p>
            </motion.div>
          </div>

          {/* Benefits & Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-blue-950/30 rounded-3xl p-8 md:p-12 border border-blue-800/30 backdrop-blur-md mb-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Tool?</h3>
              <ul className="space-y-4">
                {[
                  { icon: Clock, text: "Reduce migration timeline by up to 40%" },
                  { icon: ShieldCheck, text: "Eliminate human error in data mapping" },
                  { icon: Database, text: "Reusable framework for future projects" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-slate-300">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <Link to="/services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white px-8 h-14 text-base"
                >
                  Learn More
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/25 px-8 h-14 text-base"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default DataMigrationTool;