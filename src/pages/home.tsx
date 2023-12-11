import { useEffect, useState } from "react";


  import { products } from "../products";
import { Card } from "../components/card";
import { Pagination } from "../components/pagination";
import { AllProduct, CardProps } from "../model/productsModel";
import { FilterCategory } from "../components/filterCategory";


export function Home() {
  const responseProducts: CardProps = products
  const [category, setCategory] = useState<string>("");
  const [selectOrder, setSelectOrder] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const filteredProducts = responseProducts?.data.allProducts.filter(
    (product: AllProduct) => {
      if (category === "") {
        return true;
      } else {
        return product.category === category;
      }
    }
  );

  const [filteredByPrice, setFilteredByPrice] = useState<AllProduct[] | undefined>(
    undefined
  );

  function filterProductsByPrice(products: AllProduct[]) {
    if (selectOrder === "price-asc") {
      return [...products].sort((a, b) => a.price_in_cents - b.price_in_cents);
    }
    if (selectOrder === "price-desc") {
      return [...products].sort((a, b) => b.price_in_cents - a.price_in_cents);
    }
    return products;
  }

  useEffect(() => {
    const filtered = filterProductsByPrice(filteredProducts || []);
    setFilteredByPrice(filtered);
  }, [selectOrder, filteredProducts]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredByPrice?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row justify-between mx-8 mt-8">
          <FilterCategory setCategory={setCategory} />
          <select
            className="bg-[#F0F0F5] focus:outline-none"
            onChange={(e) => setSelectOrder(e.target.value)}
          >
            <option value="">Organizar por</option>
            <option value="price-asc">Preço: Menor - Maior</option>
            <option value="price-desc">Preço: Maior - Menor</option>
          </select>
          
        </div>
        <div className="flex flex-row justify-end items-center mx-8">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil((filteredByPrice?.length || 0) / itemsPerPage)}
            onPageChange={setCurrentPage}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentItems?.map((product: AllProduct) => (
            <div
              key={product.id}
              className="mb-5 mx-8"
              onClick={() => {
                console.log(product.name);
              }}
            >
              <Card result={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
