"use client";
import PriorityAreasContent from "@/components/priorityAreas/contents/main";
import PriorityAreaHero from "@/components/priorityAreas/priorityAreasHero";

function PriorityAreas() {
  return (
    <>
      <PriorityAreaHero title={"Priority Areas"} />
      <PriorityAreasContent />
    </>
  );
}

export default PriorityAreas;
