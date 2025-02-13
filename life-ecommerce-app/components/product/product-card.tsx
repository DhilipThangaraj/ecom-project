import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product?.slug}`}>
          <Image
            src={
              product?.images?.gallery_images[0]?.image ||
              "https://life-cdn.lifepharmacy.com/images/products/final-1024x1024-1024x1024.jpg"
            }
            alt={product?.title}
            height={300}
            width={300}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <Link href={`/product/${product?.slug}`}>
          <h2 className="text-sm font-medium">{product?.title}</h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{product.rating} Stars</p>
          {product?.stock?.max > 0 ? (
            <ProductPrice
              regularPrice={Number(product?.sale?.regular_price)}
              offerPrice={Number(product?.sale?.offer_price)}
              currency={product?.sale?.currency || "AED"}
            />
          ) : (
            <p className="text-destructive">Out Of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
