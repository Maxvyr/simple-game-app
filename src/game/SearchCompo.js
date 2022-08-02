export default function SearchCompo({
  filterText,
  inStockOnly,
  onTextInputChange,
  onCheckBoxInputChange,
}) {
  const handleFilterText = (e) => {
    onTextInputChange(e.target.value);
  };

  const handleIsStock = (e) => {
    onCheckBoxInputChange(e.target.checked);
  };

  return (
    <div style={{ backgroundColor: "red" }}>
      <input
        type="text"
        placeholder="Search"
        onChange={handleFilterText}
        value={filterText}
      />
      <input type="checkbox" onChange={handleIsStock} value={inStockOnly} />{" "}
      <span>Produit en stock seulement </span>
    </div>
  );
}
