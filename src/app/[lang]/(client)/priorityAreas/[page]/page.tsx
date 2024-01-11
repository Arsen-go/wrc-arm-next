"use client";
import { Footer, Navbar } from "@/components";
import FeministContent from "@/components/priorityAreas/contents/feminist";
import RightsContent from "@/components/priorityAreas/contents/rights";
import AdvocacyContent from "@/components/priorityAreas/contents/advocacy";
import PriorityAreaHero from "@/components/priorityAreas/priorityAreasHero";
import PriorityAreasContent from "@/components/priorityAreas/contents/main";

function PriorityAreas({ params }: { params: any }) {
  return (
    <>
      <PriorityAreaHero
        title={
          params.page === "feminist"
            ? "Feminist Safe Space"
            : params.page === "rights"
            ? "Sexual and Reproductive Health and Rights"
            : params.page === "advocacy"
            ? "Women’s Rights Advocacy"
            : "Priority Areas"
        }
      />
      {params.page === "feminist" ? (
        <FeministContent />
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
