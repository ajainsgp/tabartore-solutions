import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CalendarDays, Clock3, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  const posts = [
    {
      slug: 'oracle-ebs-data-migration-checklist',
      title: 'Oracle EBS Data Migration Checklist for Mission-Critical Projects',
      excerpt:
        'A practical checklist to reduce risk and speed up Oracle EBS R12 migrations with proven validation, reconciliation, and go-live controls.',
      category: 'Oracle Data Migration',
      date: '2026-02-10',
      readTime: '7 min read'
    },
    {
      slug: 'fusion-cloud-cutover-strategy',
      title: 'Fusion Cloud Cutover Strategy: How to Plan a Confident Go-Live',
      excerpt:
        'Learn how phased rehearsals, dependency mapping, and rollback planning can significantly improve Fusion Cloud cutover outcomes.',
      category: 'Oracle Fusion',
      date: '2026-01-28',
      readTime: '6 min read'
    },
    {
      slug: 'rag-enterprise-knowledge-oracle',
      title: 'Using RAG for Enterprise Knowledge Search in Oracle Landscapes',
      excerpt:
        'Explore a practical approach to Retrieval-Augmented Generation (RAG) for internal documentation, support content, and project knowledge.',
      category: 'AI & GenAI',
      date: '2026-01-12',
      readTime: '8 min read'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog | Oracle, Data Migration & AI Insights | Tabartore Solutions</title>
        <meta
          name="description"
          content="Read practical insights from Tabartore Solutions on Oracle EBS R12, Fusion Cloud data migration, AI implementation, and enterprise delivery best practices."
        />
        <link rel="canonical" href="https://www.tabartore.com/blog" />
      </Helmet>

      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="text-cyan-300 font-semibold tracking-wide uppercase text-sm mb-4">Insights</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Blog on Oracle, Data Migration, and Enterprise AI
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl">
              Actionable guidance, implementation lessons, and technical perspectives from real-world delivery across Oracle and modern AI projects.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 p-7 flex flex-col"
              >
                <span className="inline-flex w-fit px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 mb-4">
                  {post.category}
                </span>

                <h2 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">{post.title}</h2>
                <p className="text-slate-600 mb-6 flex-grow">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-slate-500 border-t border-slate-100 pt-4">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-7 py-6 rounded-xl shadow-lg group"
            >
              View All Articles
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;