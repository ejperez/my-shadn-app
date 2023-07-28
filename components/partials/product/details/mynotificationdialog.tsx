import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import MyNotificationForm from "./mynotificationform";
import { useState } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function MyNotificationDialog({
  color,
  size,
}: {
  color: string;
  size: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="secondary">
          NOTIFY ME
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create alert</DialogTitle>
          <DialogDescription>
            Receive an email when this product is back in stock
          </DialogDescription>
        </DialogHeader>
        <div className="text-sm">
          <AspectRatio ratio={4 / 3} asChild={true}>
            <Image
              src="https://placehold.jp/462x346.jpg"
              alt="Image"
              width="462"
			  height="346"
              className="object-cover"
            />
          </AspectRatio>
          <p className="font-semibold pt-4">My Awesome Product</p>
          <p>
            <span className="font-semibold">Color: </span>
            {color}
          </p>
          <p>
            <span className="font-semibold">Size: </span>
            {size}
          </p>

          <div className="pt-4">
            <MyNotificationForm onSuccess={setOpen} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
