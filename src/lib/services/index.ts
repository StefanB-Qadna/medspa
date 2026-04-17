export { neuromodulators, lipFillers, cheekJawlineFiller, dermalFillers, prpPrfTherapy } from "./injectables";
export { laserHairRemoval, laserSkinRejuvenation, laserTattooRemoval, rfMicroneedling, microneedling, nightlase, rfBodyContouring, hydrafacial, chemicalPeels, sclerotherapy } from "./laser-skin";
export { ivTherapy, medicalWeightLoss, hormoneOptimization, pelvicFloorWellness, peptideTherapy } from "./wellness";

import type { ServiceData } from "@/lib/service-types";
import { neuromodulators, lipFillers, cheekJawlineFiller, dermalFillers, prpPrfTherapy } from "./injectables";
import { laserHairRemoval, laserSkinRejuvenation, laserTattooRemoval, rfMicroneedling, microneedling, nightlase, rfBodyContouring, hydrafacial, chemicalPeels, sclerotherapy } from "./laser-skin";
import { ivTherapy, medicalWeightLoss, hormoneOptimization, pelvicFloorWellness, peptideTherapy } from "./wellness";

export const allServices: ServiceData[] = [
  neuromodulators,
  lipFillers,
  cheekJawlineFiller,
  dermalFillers,
  prpPrfTherapy,
  laserHairRemoval,
  laserSkinRejuvenation,
  laserTattooRemoval,
  rfMicroneedling,
  microneedling,
  nightlase,
  rfBodyContouring,
  hydrafacial,
  chemicalPeels,
  sclerotherapy,
  ivTherapy,
  medicalWeightLoss,
  hormoneOptimization,
  pelvicFloorWellness,
  peptideTherapy,
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return allServices.find((s) => s.slug === slug);
}

export const allServiceSlugs = allServices.map((s) => s.slug);
