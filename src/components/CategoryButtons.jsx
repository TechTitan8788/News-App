import React from "react";

const CategoryButtons = ({ category, onCategoryClick }) => {
  const categories = [
    "Business", "Crime", "Domestic", "Education", "Entertainment", 
    "Environment", "Food", "Health", "Lifestyle", "Other", 
    "Politics", "Science", "Sports", "Technology", "Tourism", "World"
  ];

  return (
    <div>
      {/* Heading */}
      <h4 className="text-center mb-3">Explore by Categories</h4>
      
      {/* Buttons */}
      <div className="row justify-content-end mb-3">
        {categories.map((cat) => (
          <div key={cat} className="col-6 col-sm-3 mb-2">
            <button
              className={`btn btn-outline-success w-100 ${
                category === cat ? "active" : ""
              }`}
              onClick={() => onCategoryClick(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryButtons;
