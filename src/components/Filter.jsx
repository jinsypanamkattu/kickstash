import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [section, setSection] = useState('');

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    onFilterChange({ category: newCategory, section });
  };

  const handleSectionChange = (e) => {
    const newSection = e.target.value;
    setSection(newSection);
    onFilterChange({ category, section: newSection });
  };


  return (
    <div className="filter-container">
      {/* Category Filter */}
      <div className="filter-group">
        <label>Category:</label>
        <select
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>

      {/* Section Filter */}
      <div className="filter-group">
        <label>Section:</label>
        <select
          value={section}
          onChange={handleSectionChange}
        >
          <option value="">All</option>
          <option value="summer">Summer</option>
          <option value="winter">Winter</option>
          <option value="casual">Casual</option>
        </select>
      </div>

      
    </div>
  );
};

export default Filter;
