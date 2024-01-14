import PriorityAreasContent from "@/components/priorityAreas/contents/main";
import AreaHero from "@/components/priorityAreas/priorityAreasHero";
import { DictionaryType, getDictionary } from "@/locales";

async function PriorityAreas({ params }: any) {
  const locales = await getDictionary(params.lang as DictionaryType);

  return (
    <>
      <AreaHero title={locales.priorityAreas} />
      <PriorityAreasContent />
    </>
  );
}

export default PriorityAreas;
