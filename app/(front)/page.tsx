import data from "@/lib/data";
import ProductItem from "@/components/product/productItem";
export default function Home() {
  return (
    <>
      <h2 className="text-2xl py-2">latest products</h2>
      <div className="grid grid-cols-1  gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((products)=>(
          <ProductItem key={products.slug} product={products} />
        ))}
      </div>
    </>
  );
}
