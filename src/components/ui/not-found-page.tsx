"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

const PRIMARY_ORB_HORIZONTAL_OFFSET = 40;
const PRIMARY_ORB_VERTICAL_OFFSET = 20;

export function NotFoundPage() {
  return (
    <div className="w-full relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-cream text-warm-dark">
      <div
        aria-hidden={true}
        className="-z-10 absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{
            x: [
              0,
              PRIMARY_ORB_HORIZONTAL_OFFSET,
              -PRIMARY_ORB_HORIZONTAL_OFFSET,
              0,
            ],
            y: [
              0,
              PRIMARY_ORB_VERTICAL_OFFSET,
              -PRIMARY_ORB_VERTICAL_OFFSET,
              0,
            ],
            rotate: [0, 10, -10, 0],
          }}
          className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-gradient-to-tr from-brass/20 to-linen/40 blur-3xl"
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut",
          }}
        />
        <motion.div
          animate={{
            x: [
              0,
              -PRIMARY_ORB_HORIZONTAL_OFFSET,
              PRIMARY_ORB_HORIZONTAL_OFFSET,
              0,
            ],
            y: [
              0,
              -PRIMARY_ORB_VERTICAL_OFFSET,
              PRIMARY_ORB_VERTICAL_OFFSET,
              0,
            ],
          }}
          className="absolute right-1/4 bottom-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-brass/10 to-linen/20 blur-3xl"
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut",
          }}
        />
      </div>

      <Empty className="border-0">
        <EmptyHeader>
          <EmptyTitle className="font-serif font-light text-8xl text-brass">404</EmptyTitle>
          <EmptyDescription className="text-warm-dark/60 font-sans text-base">
            The page you are looking for might have been <br />
            moved or does not exist.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-3">
            <Button asChild className="bg-warm-dark text-cream hover:bg-warm-darker rounded-sm px-6 py-2.5 font-sans text-xs font-medium uppercase tracking-wider">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" /> Go Home
              </Link>
            </Button>

            <Button asChild variant="outline" className="border-border text-warm-dark hover:bg-linen rounded-sm px-6 py-2.5 font-sans text-xs font-medium uppercase tracking-wider">
              <Link href="/services">
                <Stethoscope className="mr-2 h-4 w-4" /> Services
              </Link>
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
