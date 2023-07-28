import MyFooter from "@/components/myfooter";
import MyNav from "@/components/mynav";
import MyProduct from "@/components/myproduct";
import MyCart from "@/components/partials/mycart";
import { Toaster } from "@/components/ui/toaster";
import { CartContextProvider } from "@/store/cart-context";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Awesome Product | My Store</title>
      </Head>
      <CartContextProvider>
        <MyNav />
        <MyProduct />
        <Toaster />
        <MyCart />
        <MyFooter />
      </CartContextProvider>
    </>
  );
}
