interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: any;
}


export function Pagination({ currentPage, totalPages, onPageChange }:PaginationProps){
    const pageNumbers = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="flex flex-row justify-center mt-4 space-x-2">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => onPageChange(number)}
                className={`px-4 py-2 text-lg rounded-md text-[#737380] bg-[#E9E9F0] hover:bg-[#FFA585] focus:outline-none focus:border-[#FFA585] focus:ring-2 focus:ring-[#FFA585] focus:bg-[#fff] focus:ring-opacity-50 transition duration-300${
                  number === currentPage ? "bg-[#FFA585] text-[#FFA585]" : ""
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  