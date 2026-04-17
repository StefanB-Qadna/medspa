import type { ReactNode } from "react";

export interface TreatsItem {
  icon: ReactNode;
  label: string;
  micro: string;
}

export interface BenefitItem {
  icon: ReactNode;
  title: string;
  body: string;
}

export interface TreatmentDetail {
  label: string;
  value: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  breadcrumb: string;
  h1: string;
  subtitle: string;
  heroImage?: string;

  whatHeading: string;
  whatParagraphs: string[];

  treatsHeading: string;
  treats: TreatsItem[];

  benefits: BenefitItem[];

  treatmentDetails: TreatmentDetail[];

  bestFor: string[];
  notFor: string[];

  faqs: FaqItem[];

  whyChooseHeading: string;
  whyChoose: WhyChooseItem[];

  ctaSub: string;
}
