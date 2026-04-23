'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TeamMemberCardProps {
  position: 'left' | 'right'
  jobPosition?: string
  firstName?: string
  lastName?: string
  imageUrl?: string
  description?: string
  /** URL the circular arrow button links to */
  href?: string
  className?: string
}

export default function TeamMemberCard({
  position = 'left',
  jobPosition = 'Backend Engineer',
  firstName = 'Jennie',
  lastName = 'Garcia',
  imageUrl = 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?fm=jpg&q=60',
  description = 'Jennie is a skilled developer with expertise in modern web technologies and a passion for creating seamless user experiences.',
  href,
  className,
}: TeamMemberCardProps) {
  const fullName = `${firstName} ${lastName}`
  const isPositionRight = position === 'right'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative flex flex-col justify-center', className)}
    >
      {/* jobPosition label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p
          className={cn(
            'label mb-4',
            isPositionRight && 'text-right'
          )}
        >
          {jobPosition}
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-end">
        {/* Portrait image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative h-[28rem] w-full max-w-full md:h-[31.25rem] md:w-[22.5rem] md:max-w-none shrink-0 overflow-hidden rounded-sm',
            isPositionRight && 'md:order-1'
          )}
        >
          {/* Subtle gradient overlay */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-warm-dark/20 via-transparent to-transparent" />
          <img
            src={imageUrl}
            alt={fullName}
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
          />
        </motion.div>

        {/* Info block — overlaps image */}
        <motion.div
          initial={{ opacity: 0, x: isPositionRight ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative z-[2] -mt-16 flex w-full max-w-full box-border flex-col gap-10 bg-cream/80 backdrop-blur-sm p-6 md:-mt-0 md:bg-transparent md:backdrop-blur-none md:p-0 md:ml-8 md:w-[calc(100%-22.5rem)] md:max-w-none',
            isPositionRight && 'md:ml-0 md:-mr-8 md:items-end'
          )}
        >
          {/* Display name */}
          <div>
            <h2 className="font-serif text-statement font-normal tracking-tight text-brass">
              {firstName}
              <br />
              <span className="font-normal">{lastName}</span>
            </h2>
          </div>

          {/* Details row */}
          <div className={cn('flex flex-col-reverse md:flex-row gap-6 md:gap-8', isPositionRight && 'md:justify-end')}>
            {/* Circular CTA */}
            <motion.a
              href={href || '#'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'group flex h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-full border border-border transition-colors duration-300 hover:border-brass hover:bg-warm-dark',
                isPositionRight && 'md:order-1'
              )}
              aria-label={`Learn more about ${firstName} ${lastName}`}
            >
              <ArrowRight
                size={22}
                className={cn(
                  'text-warm-dark transition-all duration-300 group-hover:-rotate-45 group-hover:text-cream',
                  isPositionRight && 'rotate-180 group-hover:rotate-[225deg]'
                )}
              />
            </motion.a>

            {/* Bio copy */}
            <div className="md:w-[50%]">
              <p
                className={cn(
                  'font-sans text-sm leading-relaxed text-warm-dark/70',
                  isPositionRight && 'md:text-right'
                )}
              >
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
