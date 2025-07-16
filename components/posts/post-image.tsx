import Image, { StaticImageData } from "next/image";
import { imgblurDataURL } from "@/lib/constants";

interface PostImageProps {
  src: string | StaticImageData;
  title?: string;
  width?: number;
  height?: number;
}

export default function PostImage({
  src,
  title,
  width = 720,
  height = 480,
}: PostImageProps) {
  return (
    <>
      {src ? (
        <Image
          src={src}
          alt={`Image for ${title}`}
          title={`Image for ${title}`}
          className="w-full mx-auto my-10" //max-h-96
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL={imgblurDataURL}
        />
      ) : null}
    </>
  );
}
