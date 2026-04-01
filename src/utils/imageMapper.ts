import archInterior1 from '@/assets/arch-interior-1.jpg';
import archExterior1 from '@/assets/arch-exterior-1.jpg';
import archConcept1 from '@/assets/arch-concept-1.jpg';
import archInterior2 from '@/assets/arch-interior-2.jpg';
import rcc1 from '@/assets/rcc1.jpg';
import rcc2 from '@/assets/rcc2.jpg';
import rcc3 from '@/assets/rcc3.jpg';
import rcc4 from '@/assets/rcc4.jpg';
import rcc5 from '@/assets/rcc5.jpg';
import steal1 from '@/assets/steal1.jpg';
import steal2 from '@/assets/steal2.jpg';
import steal3 from '@/assets/steal3.jpg';
import steal4 from '@/assets/steal4.jpg';
import global1 from '@/assets/global1.jpg';
import global2 from '@/assets/global2.jpg';
import global3 from '@/assets/global3.jpg';
import global4 from '@/assets/global4.jpg';
import global5 from '@/assets/global5.jpg';
import survey1 from '@/assets/survey1.jpg';
import survey2 from '@/assets/survey2.jpg';
import survey3 from '@/assets/survey3.jpg';
import survey4 from '@/assets/survey4.jpg';
import survey5 from '@/assets/survey5.jpg';
import soil1 from '@/assets/soil1.jpg';
import soil2 from '@/assets/soil2.jpg';
import soil3 from '@/assets/soil3.jpg';
import soil4 from '@/assets/soil4.jpg';
import soil5 from '@/assets/soil5.jpg';
import planning1 from '@/assets/planning1.jpg';
import planning2 from '@/assets/planning2.jpg';
import planning3 from '@/assets/planning3.jpg';
import planning4 from '@/assets/planning4.jpg';
import planning5 from '@/assets/planning5.jpg';
import certificate1 from '@/assets/certificate1.jpg';
import certificate2 from '@/assets/certificate2.jpg';
import certificate3 from '@/assets/certificate3.jpg';
import certificate4 from '@/assets/certificate4.jpg';
import certificate5 from '@/assets/certificate5.jpg';
import industry1 from '@/assets/industry1.jpg';
import industry2 from '@/assets/industry2..jpg';
import industry3 from '@/assets/industry3.jpg';
import industry4 from '@/assets/industry4.jpg';
import industry5 from '@/assets/industry5.jpg';
import structure1 from '@/assets/structure1.jpg';
import structure2 from '@/assets/structure2.jpg';
import structure3 from '@/assets/structure3.jpg';
import structure4 from '@/assets/structure4.jpg';
import structure5 from '@/assets/structure5.jpg';
import property1 from '@/assets/property1.jpg';
import property2 from '@/assets/property2.jpg';
import property3 from '@/assets/property3.jpg';
import property4 from '@/assets/property4.jpg';
import property5 from '@/assets/property5.jpg';

const imageMap: Record<string, string> = {
  'arch-interior-1': archInterior1,
  'arch-exterior-1': archExterior1,
  'arch-concept-1': archConcept1,
  'arch-interior-2': archInterior2,
  'rcc1': rcc1,
  'rcc2': rcc2,
  'rcc3': rcc3,
  'rcc4': rcc4,
  'rcc5': rcc5,
  'steal1': steal1,
  'steal2': steal2,
  'steal3': steal3,
  'steal4': steal4,
  'global1': global1,
  'global2': global2,
  'global3': global3,
  'global4': global4,
  'global5': global5,
  'survey1': survey1,
  'survey2': survey2,
  'survey3': survey3,
  'survey4': survey4,
  'survey5': survey5,
  'soil1': soil1,
  'soil2': soil2,
  'soil3': soil3,
  'soil4': soil4,
  'soil5': soil5,
  'planning1': planning1,
  'planning2': planning2,
  'planning3': planning3,
  'planning4': planning4,
  'planning5': planning5,
  'certificate1': certificate1,
  'certificate2': certificate2,
  'certificate3': certificate3,
  'certificate4': certificate4,
  'certificate5': certificate5,
  'industry1': industry1,
  'industry2': industry2,
  'industry3': industry3,
  'industry4': industry4,
  'industry5': industry5,
  'structure1': structure1,
  'structure2': structure2,
  'structure3': structure3,
  'structure4': structure4,
  'structure5': structure5,
  'property1': property1,
  'property2': property2,
  'property3': property3,
  'property4': property4,
  'property5': property5,
};

export const getImageFromName = (imageName: string): string => {
  return imageMap[imageName] || archInterior1;
};

export const getImagesFromNames = (imageNames: string[]): string[] => {
  return imageNames.map(name => imageMap[name] || archInterior1);
};

