'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQSection() {
  const faqs = [
    {
      question: 'How does WebMorph generate websites?',
      answer:
        'Simply describe your website idea in natural language. Our AI understands your requirements and generates a complete, fully responsive website with all components, styling, and even basic functionality. You can then refine it further with our visual editor.',
    },
    {
      question: 'Can I edit generated websites?',
      answer:
        'Absolutely! Every generated website comes with our powerful visual editor. Change colors, layouts, text, add or remove sections, modify components—all without writing code. The editor is designed to be intuitive even for non-technical users.',
    },
    {
      question: 'Can I export the code?',
      answer:
        'Yes! You have full access to the underlying code. You can export it as Next.js, React, or static HTML/CSS. Perfect if you need to integrate with custom backends or make advanced modifications.',
    },
    {
      question: 'Does WebMorph support deployment?',
      answer:
        'Yes, WebMorph integrates seamlessly with Vercel for one-click deployment. Your website goes live in seconds with global CDN distribution. You can also deploy to other platforms or use your own domain.',
    },
    {
      question: 'Is there a free plan?',
      answer:
        'Yes! Start with our Free plan and get 5 website generations per month with basic templates. Upgrade to Pro for unlimited generations, visual editor access, and custom domain support.',
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg mt-2">
            Everything you need to know about WebMorph
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 data-[state=open]:bg-secondary"
              >
                <AccordionTrigger className="hover:no-underline py-4 font-semibold text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
