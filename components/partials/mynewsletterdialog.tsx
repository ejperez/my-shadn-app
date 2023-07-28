import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import MyNewsletterForm from "./mynewsletterform";
import { useState } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

export default function MyNewsletterDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-transparent border px-12 py-1 mt-4 rounded-md">
        SIGN UP
      </DialogTrigger>
      <DialogContent className="min-w-[800px] p-0">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <AspectRatio ratio={30 / 71} asChild={true}>
              <Image
                src="https://placehold.jp/300x710.jpg"
                alt="Image"
                width="300"
                height="710"
                className="object-fill rounded-l-lg"
              />
            </AspectRatio>
          </div>
          <div className="col-span-2 p-12 pr-32">
            <MyNewsletterForm onSuccess={setOpen} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
