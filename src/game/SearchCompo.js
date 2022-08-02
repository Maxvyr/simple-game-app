import React, { useState } from "react";

export default function SearchCompo({
  onTextInputChange,
  onCheckBoxInputChange,
}) {
  const [search, setSearch] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  const handleFilterText = (e) => {
    setSearch(e.target.value);
    onTextInputChange(e.target.value);
  };

  const handleIsStock = (e) => {
    setIsCheck(e.target.checked);
    onCheckBoxInputChange(e.target.checked);
  };

  return (
    <div style={{ backgroundColor: "red" }}>
      <input
        type="text"
        placeholder="Search"
        onChange={handleFilterText}
        value={search}
      />
      <input type="checkbox" onChange={handleIsStock} value={isCheck} />{" "}
      <span>Produit en stock seulement </span>
    </div>
  );
}
