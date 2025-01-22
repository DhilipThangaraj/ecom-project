"use client";

import { use } from "react";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import ProductPrice from "@/components/product/product-price";
import ProductImages from "@/components/product/product-images";
import AddToCart from "@/components/product/add-to-cart";
import { CardContent, Card } from "@/components/ui/card";
import { apiRequest } from "@/lib/apiService";
import { useQuery } from "@tanstack/react-query";

import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import LoadingPage from "@/app/loading";

// Define the product detail structure based on your API response
interface ProductDetail {
  name: string;
  brand: string;
  category: string;
  rating: number;
  numReviews: number;
  price: number;
  stock: number;
  description: string;
  images: string[];
}

interface ProductDetailResponse {
  product: ProductDetail;
}

// Fetch Product Detail Function
async function fetchProductDetail(
  slug: string
): Promise<ProductDetailResponse> {
  try {
    const productDetailData = await apiRequest<ProductDetailResponse>(
      "GET",
      `/product/${slug}`
    );
    return productDetailData;
  } catch (error: unknown) {
    console.error("Error fetching product detail:", error);
    throw new Error(
      (error as { message?: string })?.message ||
        "Failed to fetch product detail"
    );
  }
}

const ProductDetailsPage = ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = use(params);
  const { toast } = useToast();

  // Use query hook to fetch product details
  const { status, data: productDetailData } = useQuery<
    ProductDetailResponse,
    Error
  >({
    queryKey: ["productDetail", slug],
    queryFn: () => fetchProductDetail(slug),
  });

  if (status === "pending") {
    return <LoadingPage />;
  }

  if (status === "error") {
    toast({
      description: `The product is not available`,
      action: (
        <ToastAction
          className="bg-primary text-white hover:bg-gray-800"
          altText="Go To Home"
        >
          {"Product is not available"}
        </ToastAction>
      ),
    });
    return null;
  }

  // If no data is returned, show notFound
  if (!productDetailData) {
    notFound();
    return null;
  }

  // Destructure product data from the API response
  const { images, brand, categories, title, rating, sale, description, stock } =
    productDetailData.data.product_details;

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Images Column */}
          <div className="col-span-2">
            <ProductImages images={images?.gallery_images || []} />
          </div>

          {/* Details Column */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {brand?.name || ""} {categories?.[0]?.name || ""}
              </p>
              <h1 className="h3-bold">{title || ""}</h1>
              <p>{rating || 0} Ratings</p>
              <p>{10} reviews</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <ProductPrice
                  regularPrice={sale?.regular_price || "0"}
                  offerPrice={sale?.offer_price || 0}
                  currency={sale?.currency || "AED"}
                  className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <div
                className="mt-10"
                dangerouslySetInnerHTML={{ __html: description || "demo" }}
              />
            </div>
          </div>

          {/* Product Card */}
          <div>
            <Card>
              <CardContent className="p-4">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>
                    <ProductPrice
                      regularPrice={sale?.regular_price || "0"}
                      offerPrice={sale?.offer_price || 0}
                      currency={sale?.currency || "AED"}
                    />
                  </div>
                </div>
                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  {stock?.max > 0 ? (
                    <Badge variant="outline">In Stock</Badge>
                  ) : (
                    <Badge variant="destructive">Out Of Stock</Badge>
                  )}
                </div>
                {stock?.max > 0 && (
                  <div className="flex-center">
                    <AddToCart title={title} />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
