'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { openBookNow } from '@/lib/book-now';

const cardVariants = cva(
  'group relative flex flex-col overflow-hidden rounded-lg bg-cream text-card-foreground shadow-[0_2px_8px_rgba(61,53,48,0.08),0_8px_24px_rgba(61,53,48,0.06)] transition-all duration-300 ease-in-out hover:shadow-[0_4px_12px_rgba(61,53,48,0.12),0_16px_40px_rgba(61,53,48,0.10)]',
  {
    variants: {
      variant: {
        default: 'p-6',
        featured: 'flex-col md:flex-row',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ServiceBlogCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart'>,
    VariantProps<typeof cardVariants> {
  tag: string;
  price?: string;
  title: string;
  description: string;
  imageUrl?: string;
  href: string;
  ctaText?: string;
  consultRequired?: boolean;
}

const cardHover: Variants = {
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

const ServiceBlogCard = React.forwardRef<HTMLDivElement, ServiceBlogCardProps>(
  (
    {
      className,
      variant,
      tag,
      price,
      title,
      description,
      imageUrl,
      href,
      ctaText = 'Learn More',
      consultRequired,
      ...props
    },
    ref
  ) => {

    const content = (
      <>
        {variant === 'featured' && imageUrl && (
          <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:w-1/2 lg:w-3/5">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase">
              <span className="rounded-full bg-forest/10 px-3 py-1 text-forest">
                {tag}
              </span>
              {price && (
                <span
                  className={cn(
                    'rounded-full px-3 py-1 font-medium',
                    consultRequired
                      ? 'bg-error/10 text-error'
                      : 'bg-forest/10 text-forest'
                  )}
                >
                  {price}
                </span>
              )}
            </div>

            <h3 className="mb-3 font-serif text-xl font-bold leading-tight text-warm-dark lg:text-2xl">
              <span className="bg-gradient-to-r from-forest to-forest bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
                {title}
              </span>
            </h3>

            <p className="font-sans text-sm text-warm-dark/70 leading-relaxed">
              {description}
            </p>
          </div>

          {variant === 'featured' && (
            <div className="relative z-20 mt-8">
              <Button
                type="button"
                onClick={openBookNow}
                className="group/button bg-brass hover:bg-brass-dark text-white cursor-pointer"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
              </Button>
            </div>
          )}
        </div>
      </>
    );

    return (
      <motion.div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        variants={cardHover}
        whileHover="hover"
        {...props}
      >
        <Link
          href={href}
          className="absolute inset-0 z-10"
          aria-label={`Learn more about ${title}`}
        >
          <span className="sr-only">Learn More</span>
        </Link>
        <div className="relative z-0 flex h-full w-full flex-col md:flex-row">
          {content}
        </div>
      </motion.div>
    );
  }
);

ServiceBlogCard.displayName = 'ServiceBlogCard';

export { ServiceBlogCard };
