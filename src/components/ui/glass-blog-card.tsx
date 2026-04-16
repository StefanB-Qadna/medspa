"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BookOpen, Clock } from "lucide-react";

interface GlassBlogCardProps {
  title?: string;
  excerpt?: string;
  image?: string;
  author?: {
    name: string;
    avatar: string;
  };
  date?: string;
  readTime?: string;
  tags?: string[];
  className?: string;
  href?: string;
}

export function GlassBlogCard({
  title = "The Future of UI Design",
  excerpt = "Exploring the latest trends in glassmorphism, 3D elements, and micro-interactions.",
  image = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  author = { name: "Dr. Robledo", avatar: "" },
  date = "March 15, 2026",
  readTime = "5 min read",
  tags = ["Botox"],
  className,
  href = "/blog",
}: GlassBlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("w-full", className)}
    >
      <Card className="group relative h-full overflow-hidden rounded-md border-border-light bg-cream/30 backdrop-blur-md transition-all duration-300 hover:border-brass/50 hover:shadow-xl hover:shadow-brass/5">
        {/* Image Section */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/60 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

          <div className="absolute bottom-3 left-3 flex gap-2">
            {tags?.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-cream/70 text-warm-dark backdrop-blur-sm hover:bg-cream/90 font-sans text-xs font-medium uppercase tracking-[0.1em] border-none"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Hover Overlay Action */}
          <div className="absolute inset-0 flex items-center justify-center bg-warm-dark/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <motion.a
              href={href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-brass px-6 py-2.5 font-sans text-xs font-medium text-white shadow-lg shadow-brass/25"
            >
              <BookOpen className="h-4 w-4" />
              Read Article
            </motion.a>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-4 p-5">
          <div className="space-y-2">
            <h3 className="font-serif text-base md:text-lg font-medium leading-snug text-warm-dark transition-colors group-hover:text-brass">
              {title}
            </h3>
            <p className="line-clamp-2 font-sans text-sm text-warm-dark/60 leading-relaxed">
              {excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-border-light pt-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border border-border-light">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback className="bg-brass/10 text-brass font-sans text-xs">
                  {author.name[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-sans text-xs font-medium text-warm-dark">
                  {author.name}
                </span>
                <span className="font-sans text-xs text-warm-dark/50">{date}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 font-sans text-xs text-warm-dark/50">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
