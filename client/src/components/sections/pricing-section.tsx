'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Free',
      price: isAnnual ? 0 : 0,
      description: 'Perfect for getting started',
      features: ['5 generations/month', 'Basic templates', 'Community support'],
      cta: 'Start Free',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: isAnnual ? Math.round(99 * 10) : 12,
      period: isAnnual ? '/year' : '/month',
      description: 'For professionals and studios',
      features: [
        'Unlimited generations',
        'Visual editor',
        'Custom domains',
        'Priority support',
        'Advanced analytics',
      ],
      cta: 'Get Started',
      highlighted: true,
      savings: isAnnual ? 'Save 20%' : null,
    },
    {
      name: 'Team',
      price: isAnnual ? Math.round(299 * 10) : 35,
      period: isAnnual ? '/year' : '/month',
      description: 'For teams and agencies',
      features: [
        'Unlimited generations',
        'Team collaboration',
        'Shared workspaces',
        'Admin controls',
        'Custom integrations',
        'Dedicated support',
      ],
      cta: 'Contact Sales',
      highlighted: false,
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
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
            Simple, Transparent Pricing
          </h2>

          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-muted"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-background shadow transition ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && <Badge className="bg-primary text-primary-foreground border-0">Save 20%</Badge>}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative rounded-2xl border transition-all ${
                plan.highlighted
                  ? 'border-primary bg-primary/5 shadow-lg md:scale-105'
                  : 'border-border bg-card'
              } p-6 sm:p-8`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground border-0">Most Popular</Badge>
                </div>
              )}

              <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  ${plan.price}
                </span>
                {plan.period && <span className="text-muted-foreground text-sm ml-2">{plan.period}</span>}
              </div>

              <Button
                className={`w-full mb-8 ${
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
