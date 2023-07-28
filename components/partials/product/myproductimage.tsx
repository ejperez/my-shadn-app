import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function BottomImages() {
  return (
    <div className="col-span-1">
      <AspectRatio ratio={3 / 4} asChild={true}>
        <Image
          src="https://placehold.jp/400x533.jpg"
          alt="Image"
          width="400"
		  height="533"
          className="object-cover"
        />
      </AspectRatio>
    </div>
  );
}

export default function MyProductImage() {
  return (
    <div className="col-span-2 md:col-span-1">
      <AspectRatio ratio={3 / 4} asChild={true}>
        <Image
          src="https://placehold.jp/910x1213.jpg"
          alt="Image"
          width="910"
		  height="1213"
          className="object-cover"
		  priority
        />
      </AspectRatio>
      <div className="grid grid-cols-4 gap-2 mt-2">
        {BottomImages()}
        {BottomImages()}
        {BottomImages()}
        {BottomImages()}
      </div>
    </div>
  );
}
