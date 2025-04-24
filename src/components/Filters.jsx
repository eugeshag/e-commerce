import { useState, useEffect, useRef } from "react";

const sortOptions = [
  { value: "all", label: "Sort: Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A-Z" },
  { value: "name-desc", label: "Name: Z-A" },
];

const Filters = ({ setSort, setPriceFilter, priceFilter }) => {
  const [curOption, setCurOption] = useState(sortOptions[0]);
  const [isOpen, setIsOpen] = useState(false);
  const sortRef = useRef(null);

  {
    /* Sort close*/
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  {
    /* Sort option click handle*/
  }
  const onOptionClick = (option) => {
    setCurOption(option);
    setSort(option.value);
    setIsOpen(false);
  };

  {
    /* Price change handle*/
  }
  const handlePriceChange = (e) => {
    const { name, value } = e.target;

    if (value === "") {
      setPriceFilter((prev) => ({ ...prev, [name]: "" }));
      return;
    }
    
    const numericValue = Math.max(0, Number(value));

    setPriceFilter((prev) => {
      const newPriceFilter = { ...prev, [name]: numericValue };

      if (
        name === "min" &&
        newPriceFilter.max !== "" &&
        numericValue > newPriceFilter.max
      ) {
        newPriceFilter.max = numericValue;
      }

      if (
        name === "max" &&
        newPriceFilter.min !== "" &&
        numericValue < newPriceFilter.min
      ) {
        newPriceFilter.min = numericValue;
      }

      return newPriceFilter;
    });
  };

  return (
    <div className="mb-5 ml-auto flex items-center gap-x-5">
      {/* Price filtering*/}
      <div className="flex items-center gap-x-2">
        <input
          value={priceFilter.min}
          type="number"
          placeholder="min"
          name="min"
          onChange={handlePriceChange}
          className="w-30 appearance-none rounded-lg border-1 border-gray-100 py-1 text-center shadow-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <span>-</span>
        <input
          value={priceFilter.max}
          type="number"
          placeholder="max"
          name="max"
          onChange={handlePriceChange}
          className="w-30 appearance-none rounded-lg border-1 border-gray-100 py-1 text-center shadow-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
      </div>

      {/* Sort */}
      <div ref={sortRef} className="relative inline-block w-50">
        <button
          className="flex w-full cursor-pointer items-center justify-center rounded-lg border-1 border-gray-100 bg-white px-5 py-1 shadow-sm"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {curOption.label}
        </button>
        {isOpen && (
          <div className="absolute top-10 right-0 z-10 flex w-full flex-col rounded-lg border-1 border-gray-100 bg-white px-5 py-1 shadow-sm">
            {sortOptions.map((option) => {
              return (
                <button
                  className="mb-1 cursor-pointer"
                  key={option.value}
                  onClick={() => onOptionClick(option)}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
