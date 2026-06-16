'use client'

import { motion } from 'framer-motion'

export function DemoSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            See WebMorph in Action
          </h2>
          <p className="text-muted-foreground text-lg mt-2">
            Watch how to build a complete website from a simple prompt
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border overflow-hidden shadow-lg bg-card"
        >
          <div className="bg-foreground/5 p-6 sm:p-8 text-center">
            <div className="inline-block bg-secondary rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-base text-foreground font-semibold mb-4 sm:mb-6">
              ▶ Product Demo
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Video demo showing AI-generated websites, visual editor, and deployment coming soon
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
