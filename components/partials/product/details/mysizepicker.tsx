import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import { MouseEvent } from "react";

const SIZES = [
  {
    size: "XS",
    stock: 0,
  },
  {
    size: "S",
    stock: 100,
  },
  {
    size: "M",
    stock: 100,
  },
  {
    size: "L",
    stock: 100,
  },
  {
    size: "XL",
    stock: 1,
  },
];

export default function MySizePicker({
  sizeSelectHandler,
  size,
}: {
  sizeSelectHandler: (value: string) => void;
  size: string;
}) {
  const currentStock = SIZES.filter(
    (currentSize) => currentSize.size === size
  )[0].stock;

  function onClickHandler(event: MouseEvent<HTMLButtonElement>): void {
    sizeSelectHandler(event.currentTarget.value);
  }
  return (
    <>
      <p className="text-sm font-semibold py-2">Size</p>
      {SIZES.map((sizeOption) => (
        <Toggle
          key={sizeOption.size}
          onClick={onClickHandler}
          pressed={sizeOption.size === size}
          variant="outline"
          className="mr-1"
          value={sizeOption.size}
        >
          {sizeOption.size}
        </Toggle>
      ))}

      <div className="mt-2">
        {currentStock === 0 ? (
          <Badge variant="outline">OUT OF STOCK</Badge>
        ) : (
          ""
        )}
        {currentStock <= 10 && currentStock > 0 ? (
          <Badge variant="outline">FEW ITEMS LEFT</Badge>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
