'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {  Mail } from 'lucide-react'
import Link from 'next/dist/client/link'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative min-h-screen pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Badge className="mb-6 inline-block bg-secondary text-secondary-foreground border-0">
            ✨ AI Website Builder
          </Badge>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl mb-6"
        >
          Build Complete Websites in Seconds
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-balance text-sm sm:text-base md:text-lg text-muted-foreground mb-8 mx-auto max-w-2xl leading-relaxed"
        >
          Describe your website idea in plain English and WebMorph instantly generates a fully responsive website with live preview, editable components, and one-click deployment.
        </motion.p>

        <motion.div variants={itemVariants} className="mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="/sign-in">
              <Button size="lg" className="w-full sm:w-auto gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Mail className="w-4 h-4" />
                Continue with Email
              </Button>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">Or start with Google OAuth</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-card border border-border rounded-2xl p-8 space-y-4 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-primary text-sm font-semibold">✓</span>
            </div>
            <span className="text-sm font-medium text-foreground">Example prompt:</span>
          </div>
          <p className="text-foreground italic">
            &quot;Create a modern SaaS landing page for a fintech startup with pricing, testimonials, and a contact form&quot;
          </p>
          <div className="pt-4">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Generate Website
            </Button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Trusted by 50,000+ creators and developers
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
