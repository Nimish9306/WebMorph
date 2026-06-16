'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export function WhySection() {
  const reasons = [
    {
      title: 'Generate Production-Ready Websites',
      description: 'Get fully functional, SEO-optimized websites that are ready to deploy immediately, no setup required.',
    },
    {
      title: 'Edit Visually Without Code',
      description: 'Modify colors, layouts, content, and components with an intuitive visual editor. No coding skills needed.',
    },
    {
      title: 'Deploy Instantly Worldwide',
      description: 'One-click deployment to Vercel&apos;s global CDN. Your website is live in seconds with zero downtime.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Why Teams Choose WebMorph
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-background border border-border rounded-xl p-6 sm:p-8"
            >
              <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
