"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";

/* eslint-disable @typescript-eslint/no-explicit-any */
const AddToCart = ({ title }: { title: any }) => {
  const router = useRouter();
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      description: `${title} is added to cart.`,
      action: (
        <ToastAction
          className="bg-primary text-white hover:bg-gray-800"
          altText="Go To Cart"
          onClick={() => router.push("/cart")}
        >
          Go To Cart
        </ToastAction>
      ),
    });
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      Add To Cart
    </Button>
  );
};

export default AddToCart;
