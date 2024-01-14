import FeministContent from "@/components/priorityAreas/contents/feminist";
import RightsContent from "@/components/priorityAreas/contents/rights";
import AdvocacyContent from "@/components/priorityAreas/contents/advocacy";
import PriorityAreaHero from "@/components/priorityAreas/priorityAreasHero";
import PriorityAreasContent from "@/components/priorityAreas/contents/main";
import { DictionaryType, getDictionary } from "@/locales";

async function PriorityAreas({ params }: { params: any }) {
  const locales = await getDictionary(params.lang as DictionaryType);
  console.log("🚀 ~ PriorityAreas ~ locales:", locales);
  return (
    <>
      <PriorityAreaHero
        title={
          params.page === "feminist"
            ? locales.feministSafeSpaceTitle
            : params.page === "rights"
            ? locales.healthAndRightsTitle
            : params.page === "advocacy"
            ? locales.rightsAdvocacyTitle
            : locales.priorityAreas
        }
      />
      {params.page === "feminist" ? (
        <FeministContent locales={locales} />
      ) : params.page === "rights" ? (
        <RightsContent />
      ) : params.page === "advocacy" ? (
        <AdvocacyContent />
      ) : (
        <PriorityAreasContent />
      )}
    </>
  );
}

export default PriorityAreas;
