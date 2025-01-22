import ProductList from "@/components/product/product-list";
import sampleData from "@/db/sample-data";
import { PRODUCT_LIST } from "@/react-query/query-keys";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { status, data, error } = useQuery({
    queryKey: [PRODUCT_LIST],
    queryFn: fetchProductList,
  });

  if (status === "pending") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  console.log("???????????????data", data);

  return (
    <>
      <ProductList data={sampleData.products} title="Newest Arrival" />
    </>
  );
};

export default HomePage;
