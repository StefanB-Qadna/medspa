"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title = "From Our Blog",
  description = "Honest answers to the questions we hear most, from a surgeon's perspective.",
  items,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
      setScrollSnaps(carouselApi.scrollSnapList());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    carouselApi.on("reInit", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
      carouselApi.off("reInit", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-2">
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-brass">
              {title}
            </p>
            <h2 className="font-serif text-2xl font-normal md:text-[2rem] text-warm-dark">
              {description}
            </h2>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <button
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-warm-dark/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="size-5 text-warm-dark" />
            </button>
            <button
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-warm-dark/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight className="size-5 text-warm-dark" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-[max(1.5rem,calc(50vw-580px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-[280px] pl-4 md:basis-[320px]"
              >
                <Link href={item.href} className="group block">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/90 via-warm-dark/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-5 md:p-6 text-cream">
                      <h3 className="mb-3 font-serif text-lg font-medium leading-snug">
                        {item.title}
                      </h3>
                      <span className="flex items-center font-sans text-sm font-medium text-brass">
                        Read more
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-brass" : "bg-brass/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
