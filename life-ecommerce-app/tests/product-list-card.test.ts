// import { render, screen } from "@testing-library/react";
// import ProductList from "@/components/product/product-list";
// import ProductCard from "@/components/product/product-card";

// jest.mock("./product-card", () => ({ product }: { product: any }) => (
//   <div data-testid="product-card">{product.name}</div>
// ));

// describe("ProductList Component", () => {
//   const mockData = [
//     { id: "1", name: "Product 1" },
//     { id: "2", name: "Product 2" },
//   ];

//   it("renders the title correctly", () => {
//     render(<ProductList data={mockData} title="Test Title" />);
//     expect(screen.getByText("Test Title")).toBeInTheDocument();
//   });

//   it("renders product cards when data is provided", () => {
//     render(<ProductList data={mockData} title="Product List" />);
//     const productCards = screen.getAllByTestId("product-card");
//     expect(productCards).toHaveLength(mockData.length);
//     expect(productCards[0]).toHaveTextContent("Product 1");
//     expect(productCards[1]).toHaveTextContent("Product 2");
//   });

//   it("renders a message when no products are found", () => {
//     render(<ProductList data={[]} title="Empty Product List" />);
//     expect(screen.getByText("No products found")).toBeInTheDocument();
//   });

//   it("applies the correct CSS classes", () => {
//     const { container } = render(
//       <ProductList data={mockData} title="Product List" />
//     );
//     expect(container.querySelector(".my-10")).toBeInTheDocument();
//     expect(container.querySelector(".grid")).toBeInTheDocument();
//   });

//   it("does not render product cards if data is empty", () => {
//     render(<ProductList data={[]} title="No Products" />);
//     expect(screen.queryByTestId("product-card")).not.toBeInTheDocument();
//   });
// });
