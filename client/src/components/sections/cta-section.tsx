'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold text-foreground sm:text-5xl mb-6">
          Turn Ideas Into Websites Instantly
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Generate, customize, and launch websites faster than ever with AI. No coding required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Start Building Free
          </Button>
          <Button size="lg" variant="outline">
            Book a Demo
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
