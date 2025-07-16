import { Card } from "@/components/ui/card";
import TourCardBody from "./tour-card-body";
import TourCardImg from "./tour-card-img";
import { Tours } from "@/.velite";

export default function TourCard(tour: Tours) {
  return (
    <Card className="group relative rounded-md flex flex-col xl:flex-row w-full bg-muted shadow-sm">
      <div className="xl:flex-[7] rounded-l-md overflow-hidden z-10">
        <TourCardImg tour={tour} />
      </div>
      <div className="xl:flex-[5] m-3 z-20">
        <TourCardBody tour={tour} />
      </div>
    </Card> 
  );
}
