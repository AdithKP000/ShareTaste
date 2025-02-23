import React, { useState, useRef, useEffect } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchRef = useRef(null);

  const recipes = [
    { name: "Belgian Waffles", ingredients: ["Flour", "Eggs", "Milk", "Butter", "Sugar", "Baking Powder"] },
    { name: "Butter Chicken", ingredients: ["Chicken", "Butter", "Tomatoes", "Cream", "Spices"] },
    { name: "Salteñas", ingredients: ["Flour", "Beef", "Potatoes", "Raisins", "Olives", "Spices"] },
    { name: "Jollof Rice", ingredients: ["Rice", "Tomatoes", "Onions", "Peppers", "Spices"] },
    { name: "Sushi", ingredients: ["Rice", "Nori", "Fish", "Soy Sauce", "Vinegar"] },
    { name: "Poutine", ingredients: ["French Fries", "Cheese Curds", "Gravy"] },
    { name: "Pizza Margherita", ingredients: ["Flour", "Tomatoes", "Mozzarella", "Basil", "Olive Oil"] },
    { name: "Paella", ingredients: ["Rice", "Seafood", "Saffron", "Peppers", "Tomatoes"] },
    { name: "Tacos", ingredients: ["Tortillas", "Beef", "Onions", "Cilantro", "Cheese"] },
    { name: "Biryani", ingredients: ["Rice", "Chicken", "Yogurt", "Spices", "Onions"] },
  ];

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setShowSuggestions(true);
    setHighlightedIndex(-1); // Reset highlight when typing
  };

  const handleSelect = (recipe) => {
    setSearchInput(recipe.name);
    setSelectedRecipe(recipe);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || filteredRecipes.length === 0) return;

    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) => (prev < filteredRecipes.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      handleSelect(filteredRecipes[highlightedIndex]);
    }
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} style={{ position: "relative", width: "300px", margin: "20px auto" }}>
      <input
        type="search"
        placeholder="Search recipes..."
        value={searchInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setShowSuggestions(true)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      {showSuggestions && searchInput && (
        <ul
          style={{
            position: "absolute",
            top: "40px",
            left: "0",
            width: "100%",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            maxHeight: "200px",
            overflowY: "auto",
            padding: "0",
            margin: "0",
            listStyle: "none",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe, index) => (
              <li
                key={index}
                onClick={() => handleSelect(recipe)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  background: highlightedIndex === index ? "#f0f0f0" : "white",
                }}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {recipe.name}
              </li>
            ))
          ) : (
            <li style={{ padding: "10px", color: "#777" }}>No results found</li>
          )}
        </ul>
      )}

      {selectedRecipe && (
        <table border="1" style={{ marginTop: "10px", width: "100%" }}>
          <thead>
            <tr>
              <th>Recipe</th>
              <th>Ingredients</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedRecipe.name}</td>
              <td>{selectedRecipe.ingredients.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchBar;
