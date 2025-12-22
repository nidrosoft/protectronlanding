"use client"

import type React from "react"

import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { motion } from "framer-motion"

export interface PricingFeature {
  text: string
}

export interface PricingTier {
  name: string
  description: string
  price?: number
  annualPrice?: number
  priceLabel?: string
  billingPeriod?: string
  buttonText: string
  buttonHref?: string
  isPrimary?: boolean
  features: PricingFeature[]
  featuresTitle?: string
}

export interface PricingProps {
  title: string
  subtitle: string
  tiers: PricingTier[]
  className?: string
}

export function Pricing({
  title,
  subtitle,
  tiers,
  className,
}: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className={cn("w-full py-16 md:py-24 px-4", className)}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-400 mb-4">
            Pricing
          </span>
          <h2 className="text-display-sm font-semibold text-primary md:text-display-md mb-4">{title}</h2>
          <p className="text-lg text-tertiary max-w-2xl mx-auto">{subtitle}</p>
          
          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium", !isAnnual ? "text-primary" : "text-tertiary")}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={cn(
                "relative w-14 h-7 rounded-full transition-colors",
                isAnnual ? "bg-brand-600" : "bg-gray-300 dark:bg-gray-600"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform shadow-sm",
                  isAnnual && "translate-x-7"
                )}
              />
            </button>
            <span className={cn("text-sm font-medium", isAnnual ? "text-primary" : "text-tertiary")}>
              Annual <span className="text-success-600 dark:text-success-400">(Save 17%)</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  "bg-primary border-secondary p-6 flex flex-col h-full",
                  tier.isPrimary && "ring-2 ring-brand-500 relative"
                )}
              >
                {tier.isPrimary && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                {/* Tier Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{tier.name}</h3>
                  <p className="text-sm text-tertiary leading-relaxed">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {tier.price !== undefined ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-primary">
                        €{isAnnual && tier.annualPrice ? tier.annualPrice : tier.price}
                      </span>
                      <span className="text-tertiary">/mo</span>
                    </div>
                  ) : (
                    <div className="text-xl font-semibold text-primary">{tier.priceLabel}</div>
                  )}
                  {tier.price !== undefined && (
                    <p className="text-sm text-tertiary mt-1">
                      {isAnnual ? "billed annually" : "billed monthly"}
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <motion.a
                  href={tier.buttonHref || "#"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full py-3 px-4 rounded-lg font-semibold text-sm mb-6 transition-colors text-center block",
                    tier.isPrimary
                      ? "bg-brand-600 hover:bg-brand-700 text-white"
                      : tier.priceLabel 
                        ? "bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900"
                        : "bg-secondary hover:bg-tertiary text-primary border border-secondary"
                  )}
                >
                  {tier.buttonText}
                </motion.a>

                {/* Features Title */}
                {tier.featuresTitle && (
                  <div className="mb-4 text-sm font-semibold text-secondary">{tier.featuresTitle}</div>
                )}

                {/* Features List */}
                <div className="space-y-3 flex-1">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-tertiary leading-relaxed">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
