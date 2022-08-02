import React, { useState } from "react";
import GameTable from "./GameTable";
import SearchCompo from "./SearchCompo";

export default function FilterableGameTable({ games }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const onTextInputChange = (value) => {
    setFilterText(value);
    console.log("filterText " + filterText);
  };

  const onCheckBoxInputChange = (value) => {
    setInStockOnly(value);
    console.log("inStockOnly " + inStockOnly);
  };

  return (
    <div>
      FilterableGameTable
      <SearchCompo
        onCheckBoxInputChange={onCheckBoxInputChange}
        onTextInputChange={onTextInputChange}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
      <GameTable
        games={games}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
