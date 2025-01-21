import { Badge } from "@/components/ui/badge";
import sampleData from "@/db/sample-data";
import { notFound } from "next/navigation";
import ProductPrice from "@/components/product/product-price";
import ProductImages from "@/components/product/product-images";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await sampleData.products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/*Images Column */}
          <div className="col-span-2">
            <ProductImages images={product.images} />
          </div>
          {/* Details Column */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="h3-bold">{product.name}</h1>
              <p>
                {product.rating} of {product.numReviews} Reviews
              </p>
              <p>{product.numReviews} reviews</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <ProductPrice
                  value={Number(product.price)}
                  className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
