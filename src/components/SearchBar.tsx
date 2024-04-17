import React, { ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="SearchBox">
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
