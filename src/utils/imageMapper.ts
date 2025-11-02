import archInterior1 from '@/assets/arch-interior-1.jpg';
import archExterior1 from '@/assets/arch-exterior-1.jpg';
import archConcept1 from '@/assets/arch-concept-1.jpg';
import archInterior2 from '@/assets/arch-interior-2.jpg';

const imageMap: Record<string, string> = {
  'arch-interior-1': archInterior1,
  'arch-exterior-1': archExterior1,
  'arch-concept-1': archConcept1,
  'arch-interior-2': archInterior2,
};

export const getImageFromName = (imageName: string): string => {
  return imageMap[imageName] || archInterior1;
};

export const getImagesFromNames = (imageNames: string[]): string[] => {
  return imageNames.map(name => imageMap[name] || archInterior1);
};

