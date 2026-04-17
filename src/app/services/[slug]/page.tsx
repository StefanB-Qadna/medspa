import { notFound } from "next/navigation";
import { getServiceBySlug, allServiceSlugs } from "@/lib/services";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export function generateStaticParams() {
  return allServiceSlugs.map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getServiceBySlug(slug);

  if (!data) {
    notFound();
  }

  return <ServiceDetailPage data={data} />;
}
