import { useState, useEffect, useRef } from "react";

const filterOptions = [
  { value: "all", label: "Sort: Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A-Z" },
  { value: "name-desc", label: "Name: Z-A" },
];

const Filters = ({ setFilter }) => {
  const [curOption, setCurOption] = useState(filterOptions[0]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onOptionClick = (option) => {
    setCurOption(option);
    setFilter(option.value);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative mb-5 ml-auto inline-block w-50">
      <button
        className="flex w-full cursor-pointer items-center justify-center rounded-lg border-1 border-gray-100 bg-white px-5 py-1 shadow-sm"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {curOption.label}
      </button>
      {isOpen && (
        <div className="absolute top-10 right-0 z-10 flex w-full flex-col rounded-lg border-1 border-gray-100 bg-white px-5 py-1 shadow-sm">
          {filterOptions.map((option) => {
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
  );
};

export default Filters;
