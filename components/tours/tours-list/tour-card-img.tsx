import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tours } from "@/.velite";
import R2Image from "@/components/styledcomps/R2Image";

export default function TourCardImg({ tour }: { tour: Tours }) {
  return ( 
      <AspectRatio ratio={16 / 9}>
        <R2Image
          className="w-full h-auto object-cover transition duration-500 ease-in-out group-hover:scale-110"
          src={tour.bg_image!}
          width={720}
          height={480}
          alt={tour.title!}
        />
      </AspectRatio> 
  );
}
