"use client";
import DonatePage from "@/components/donate/donate";
import PriorityAreasContent from "@/components/priorityAreas/contents/main";
import PriorityAreaHero from "@/components/priorityAreas/priorityAreasHero";

function Donate() {
  return (
    <>
      <PriorityAreaHero title={"Donate"} />
      <DonatePage />
    </>
  );
}

export default Donate;
