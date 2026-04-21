export { neuromodulators, dermalFillers, prpPrfTherapy } from "./injectables";
export { laserHairRemoval, laserSkinRejuvenation, laserVeinTreatment, laserTattooRemoval, rfMicroneedling, microneedling, nightlase, rfBodyContouring, glaceeHydrodermabrasion } from "./laser-skin";
export { ivTherapy, medicalWeightLoss, hormoneOptimization, pelvicFloorWellness, wellnessSupplementation } from "./wellness";

import type { ServiceData } from "@/lib/service-types";
import { neuromodulators, dermalFillers, prpPrfTherapy } from "./injectables";
import { laserHairRemoval, laserSkinRejuvenation, laserVeinTreatment, laserTattooRemoval, rfMicroneedling, microneedling, nightlase, rfBodyContouring, glaceeHydrodermabrasion } from "./laser-skin";
import { ivTherapy, medicalWeightLoss, hormoneOptimization, pelvicFloorWellness, wellnessSupplementation } from "./wellness";

export const allServices: ServiceData[] = [
  neuromodulators,
  dermalFillers,
  prpPrfTherapy,
  laserHairRemoval,
  laserSkinRejuvenation,
  laserVeinTreatment,
  laserTattooRemoval,
  rfMicroneedling,
  microneedling,
  nightlase,
  rfBodyContouring,
  glaceeHydrodermabrasion,
  ivTherapy,
  medicalWeightLoss,
  hormoneOptimization,
  pelvicFloorWellness,
  wellnessSupplementation,
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return allServices.find((s) => s.slug === slug);
}

export const allServiceSlugs = allServices.map((s) => s.slug);
