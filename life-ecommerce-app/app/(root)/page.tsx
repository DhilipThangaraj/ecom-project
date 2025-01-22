"use client";

import { useInfiniteQuery, QueryFunctionContext } from "@tanstack/react-query";
import ProductList from "@/components/product/product-list";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingPage from "../loading";

interface Product {
  slug: string;
  name: string;
  image: string;
  price: number;
}

interface Filter {
  category?: string;
  priceRange?: {
    min: number | null;
    max: number | null;
  };
}

interface FetchProductsResponse {
  products: Product[];
  hasMore: boolean;
}

const fetchProducts = async ({
  pageParam = 0,
  queryKey,
}: QueryFunctionContext<[string, string, Filter]>) => {
  const [, searchQuery, filters] = queryKey;
  const take = 10;
  const skip = (pageParam as number) * take;

  const search = searchQuery
    ? `&search=${encodeURIComponent(searchQuery)}`
    : "";
  const category = filters?.category
    ? `&category=${encodeURIComponent(filters.category)}`
    : "";
  const priceRange = filters?.priceRange
    ? `&min_price=${filters.priceRange.min || 0}&max_price=${
        filters.priceRange.max || ""
      }`
    : "";

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?take=${take}&skip=${skip}${search}${category}${priceRange}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return {
    products: data.data.products as Product[],
    hasMore: data.data.products.length > 0,
  };
};

const HomePage: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } =
    useInfiniteQuery<FetchProductsResponse>({
      queryKey: ["PRODUCT_LIST", "", { category: "", priceRange: null }],
      queryFn: fetchProducts,
      getNextPageParam: (lastPage, pages) =>
        lastPage.hasMore ? pages.length : undefined,
    });

  if (isLoading) return <LoadingPage />;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  // Flatten all products from pages
  const allProducts = data?.pages.flatMap((page) => page?.products) || [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Discover the Latest Arrivals</h1>

      <InfiniteScroll
        dataLength={allProducts.length}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<div>Loading more products...</div>}
        endMessage={
          <div className="text-center mt-4">No more products to load</div>
        }
      >
        <ProductList data={allProducts} title="Discover the Latest Arrivals" />
      </InfiniteScroll>
    </div>
  );
};

export default HomePage;
