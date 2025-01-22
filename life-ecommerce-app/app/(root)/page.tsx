"use client";

import ProductList from "@/components/product/product-list";
import { apiRequest } from "@/lib/apiService";
import { PRODUCT_LIST } from "@/react-query/query-keys";
import { useQuery } from "@tanstack/react-query";

import { Product } from "@/types";

interface ProductsListResponse {
  products?: Product[];
}

// Fetch Product List Function
async function fetchProductsList(): Promise<ProductsListResponse> {
  try {
    const productsListData = await apiRequest<ProductsListResponse>(
      "GET",
      "/products"
    );
    return productsListData;
  } catch (error: unknown) {
    console.error("Error fetching product list:", error);
    throw new Error(
      (error as { message?: string })?.message || "Failed to fetch product list"
    );
  }
}

const HomePage: React.FC = () => {
  const {
    status,
    data: productsListData,
    error,
  } = useQuery<ProductsListResponse, Error>({
    queryKey: [PRODUCT_LIST],
    queryFn: fetchProductsList,
  });

  if (status === "pending") {
    return <span></span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <ProductList
        data={productsListData?.data?.products || []}
        title={"Discover the Latest Arrivals"}
      />
    </>
  );
};

export default HomePage;
