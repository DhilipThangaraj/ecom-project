import { cn } from "@/lib/utils";

type TProductPrice = {
  regularPrice: number;
  offerPrice: number;
  currency: string;
  className?: string;
};

const ProductPrice = ({
  regularPrice,
  offerPrice,
  currency,
  className,
}: TProductPrice) => {
  // Ensure Two decimal places
  // const stringValue = value.toFixed(2);

  // Get the int/float
  // const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl mt-2", className)}>
      <span className="text-xs align-super line-through">
        {currency} {regularPrice.toFixed(2)}
      </span>{" "}
      <span className="text-xs align-super">
        {currency} {offerPrice.toFixed(2)}
      </span>
    </p>
  );
};

export default ProductPrice;
