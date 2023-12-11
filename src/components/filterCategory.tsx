import { useEffect, useState } from "react";

interface CategoryProps {
  setCategory: (category: string) => void;
}

interface Tab {
  id: number;
  title: string;
  category: string;
}

const tabs: Tab[] = [
  {
    id: 1,
    title: "TODOS OS PRODUTOS",
    category: "",
  },
  {
    id: 2,
    title: "CAMISETAS",
    category: "t-shirts",
  },
  {
    id: 3,
    title: "CANECAS",
    category: "mugs",
  },
];

export function FilterCategory({ setCategory }: CategoryProps) {
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setCategory(selectedCategory);
  }, [selectedCategory, setCategory]);

  return (
    <div className="flex flex-row space-x-5">
      {tabs.map((item: Tab) => (
        <div key={item.category}>
          <button
            className={`border-b-[4px] border-[#F0F0F5] ${
              item.category === selectedCategory
                ? "border-[#FFA585]"
                : ""
            }`}
            onClick={() => setSelectedCategory(item.category)}
            aria-label={`Filtrar por ${item.title}`}
          >
            {item.title}
          </button>
        </div>
          
      ))}
    </div>
  );
}
