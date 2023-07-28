import { Toggle } from "@/components/ui/toggle";
import { MouseEvent } from "react";

const COLORS = ["Green", "Orange", "Red", "Blue", "Purple"];

export default function MyColorPicker({
  colorSelectHander,
  color,
}: {
  colorSelectHander: (value: string) => void;
  color: string;
}) {
  function onClickHandler(event: MouseEvent<HTMLButtonElement>): void {
    colorSelectHander(event.currentTarget.value);
  }

  return (
    <>
      <p className="text-sm font-semibold py-2">Color</p>
      {COLORS.map((colorOption) => (
        <Toggle
          key={colorOption}
          onClick={onClickHandler}
          pressed={colorOption === color}
          variant="outline"
          className="mr-1"
          value={colorOption}
        >
          {colorOption}
        </Toggle>
      ))}
    </>
  );
}
