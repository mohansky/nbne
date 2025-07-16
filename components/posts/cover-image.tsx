import Image from "next/image";
import type { StaticImageData } from "next/image";
import { imgblurDataURL } from "@/lib/constants";
import { Skeleton } from "../ui/skeleton";

interface CoverImageProps {
  src: string | StaticImageData;
  title?: string;
  width?: number;
  height?: number;
}

export default function CoverImage({
  src,
  title,
  width = 720,
  height = 480,
}: CoverImageProps) {
  return (
    <>
      {src ? (
        <Image
          src={src}
          alt={`Cover Image for ${title}`}
          title={`Cover Image for ${title}`}
          className="max-h-72 object-cover rounded-t-md"
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL={imgblurDataURL}
        />
      ) : (
        <Skeleton className="max-h-72 w-full" />
      )}
    </>
  );
}
