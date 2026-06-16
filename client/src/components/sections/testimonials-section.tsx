'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Startup Founder',
      avatar: 'SC',
      rating: 5,
      quote: 'WebMorph cut our website launch time from weeks to hours. We went from concept to live product in a single afternoon.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Indie Hacker',
      avatar: 'MJ',
      rating: 5,
      quote: 'As someone who can&apos;t design, WebMorph is a game-changer. The AI generates beautiful sites that actually work.',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Full Stack Developer',
      avatar: 'ER',
      rating: 5,
      quote: 'The visual editor is so intuitive, even my non-technical team members can make edits. This saved us so much development time.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Loved by Creators and Developers
          </h2>
          <p className="text-muted-foreground text-lg mt-2">
            See what our users say about WebMorph
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-background border border-border rounded-xl p-6 sm:p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 italic">&quot;{testimonial.quote}&quot;</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
