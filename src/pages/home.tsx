import { useState } from "react";
import { Card } from "../components/card";
import { Pagination } from "../components/pagination";
import { products } from "../products";

export function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectOrder, setSelectOrder] = useState<string>("");
  const itemsPerPage = 12;
  return (
    <>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row justify-between mx-8 mt-8">
          <input type="text" />
          <select
            className="bg-[#F0F0F5] font-light focus:outline-none"
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
            totalPages={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.data.allProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="mb-5 mx-8"
                onClick={() => {
                  console.log(product.name);
                }}
              >
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
