'use client'

import { motion } from 'framer-motion'
import { Sparkles, Edit3, Smartphone, Rocket } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI Website Generation',
      description: 'Describe your vision and WebMorph generates a complete, production-ready website instantly.',
    },
    {
      icon: Edit3,
      title: 'Live Visual Editor',
      description: 'Edit every component visually without writing a single line of code.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Layouts',
      description: 'Perfect on every device. WebMorph automatically creates responsive designs.',
    },
    {
      icon: Rocket,
      title: 'Instant Deployment',
      description: 'Deploy your website worldwide with one click to Vercel or your custom domain.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.2 },
    },
  }

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            What Can WebMorph Do For You?
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to build professional websites with AI
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
