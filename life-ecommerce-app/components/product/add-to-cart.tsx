"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

const AddToCart = () => {
  const router = useRouter();

  return (
    <Button
      className="w-full"
      type="button"
      onClick={() => router.push("/cart")}
    >
      <Plus className="w-4 h-4" /> Add To Cart
    </Button>
  );
};

export default AddToCart;
