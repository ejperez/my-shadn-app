import MyProductImage from "./partials/product/myproductimage";
import MyProductDetails from "./partials/product/myproductdetails";
import ProductCards from "./partials/product/productcards";

export default function MyProduct() {
  return (
    <main className="mx-10 lg:mx-64">
      <div className="grid grid-cols-2 pt-10">
        <MyProductImage />
        <MyProductDetails />
      </div>
      <ProductCards
        title="YOU MAY ALSO LIKE"
        description="Discover more high quality products. We have gathered some pieces below that you may also like."
        count={4}
		showButton={true}
      />
    </main>
  );
}
