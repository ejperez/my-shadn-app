import MyAccordion from "./myaccordion";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import MyColorPicker from "./details/mycolorpicker";
import MySizePicker from "./details/mysizepicker";
import MyNotificationDialog from "./details/mynotificationdialog";
import CartContext from "@/store/cart-context";

export default function MyProductDetails() {
  const [isSoldOut, updateIsSoldOut] = useState(false);
  const [color, setSelectedColor] = useState("Orange");
  const [size, setSelectedSize] = useState("S");
  const cartContext = useContext(CartContext);

  function sizeSelectHandler(value: string) {
    updateIsSoldOut(value === "XS");
    setSelectedSize(value);
  }

  function colorSelectHander(value: string) {
    setSelectedColor(value);
  }

  function addToCartHandler() {
    cartContext.setIsCartOpen(true);
  }

  return (
    <div className="col-span-2 md:col-span-1 pl-12">
      <h1 className="text-3xl">My Awesome Product</h1>
      <p className="text-sm pt-2">A super awesome product</p>
      <div className="pt-5 font-semibold">385 USD</div>

      <div className="pt-5">
        <MyColorPicker colorSelectHander={colorSelectHander} color={color} />
      </div>

      <div className="pt-5">
        <MySizePicker sizeSelectHandler={sizeSelectHandler} size={size} />
      </div>

      <div className="pt-12">
        {isSoldOut ? (
          <MyNotificationDialog color={color} size={size} />
        ) : (
          <Button onClick={addToCartHandler} size="lg">
            ADD TO CART
          </Button>
        )}
      </div>
      <MyAccordion />
    </div>
  );
}
