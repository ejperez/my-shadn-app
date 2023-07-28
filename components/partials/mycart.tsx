import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import CartContext from "@/store/cart-context";
import { useContext } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function MyCart() {
  const cartContext = useContext(CartContext);

  function getCartItem() {
    return (
      <div className="grid grid-cols-4 pt-1">
        <div className="col-span-1 p-1">
          <AspectRatio ratio={9 / 10}>
            <Image
              src="https://placehold.jp/90x110.jpg"
              alt="Image"
              width="90"
              height="110"
              className="object-cover"
            />
          </AspectRatio>
        </div>
        <div className="col-span-2 text-xs p-1 leading-5">
          <p>My Awesome Product</p>
          <p>Size - One Size</p>
        </div>
        <div className="col-span-1 text-xs p-1 text-right">
          <p>385 USD</p>
        </div>
      </div>
    );
  }

  function getTotals() {
    return (
      <div className="grid grid-cols-2 text-xs border-b-[1px] py-6 border-b-gray-400 mb-8">
        <div className="p-1 leading-5">
          <p>Items total</p>
          <p>Shipping</p>
          <p>Tax deducted</p>
          <p className="font-semibold text-sm">Total</p>
        </div>
        <div className="p-1 text-right leading-5">
          <p>1155 USD</p>
          <p>100 USD</p>
          <p>-100 USD</p>
          <p className="font-semibold text-sm">1155 USD</p>
        </div>
      </div>
    );
  }

  return (
    <Sheet
      open={cartContext.isCartOpen}
      onOpenChange={cartContext.setIsCartOpen}
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="border-b-[1px] pb-6 border-b-gray-400">
            <div className="grid grid-cols-2">
              <div>Your cart</div>
              <div className="text-right">
                <button className="text-sm underline">Continue shopping</button>
              </div>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="border-b-[1px] pt-4 pb-8 border-b-gray-400">
          {getCartItem()}
          {getCartItem()}
          {getCartItem()}
        </div>

        {getTotals()}

        <Button className="w-full">PROCEED TO CHECKOUT</Button>
      </SheetContent>
    </Sheet>
  );
}
