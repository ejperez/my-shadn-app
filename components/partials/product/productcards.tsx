import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

function ProductCard() {
  return (
    <a href="#">
      <AspectRatio ratio={3 / 4}>
        <Image
          src="https://placehold.jp/450x600.jpg"
          alt="Image"
          width="450"
          height="600"
          className="object-cover"
        />
      </AspectRatio>
      <h3 className="pt-2">Another Product</h3>
      <p className="text-sm pt-2">100 USD</p>
    </a>
  );
}

export default function ProductCards({
  title,
  description,
  count,
  showButton,
}: {
  title: string;
  description?: string;
  count: number;
  showButton?: boolean;
}) {
  return (
    <div className="pt-10">
      <h2 className="text-lg py-4">{title}</h2>
      {description ? <p className="text-xs py-2">{description}</p> : ""}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {Array(count)
          .fill(1)
          .map((index) => (
            <ProductCard key={index * Math.random()} />
          ))}
      </div>

      {showButton ? (
        <div className="text-center py-8">
          <Button variant="secondary">SHOW ALL</Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
