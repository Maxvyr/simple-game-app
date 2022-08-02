import React from "react";
import GameTable from "./GameTable";
import SearchCompo from "./SearchCompo";

export default function FilterableGameTable({ games }) {
  console.log(`FilterableGameTable -> games length : ${games.length}`);

  const onTextInputChange = (value) => {
    console.log("FilterableGameTable " + value);
  };

  const onCheckBoxInputChange = (value) => {
    console.log("FilterableGameTable " + value);
  };

  return (
    <div>
      FilterableGameTable
      <SearchCompo
        onCheckBoxInputChange={onCheckBoxInputChange}
        onTextInputChange={onTextInputChange}
      />
      <GameTable games={games} />
    </div>
  );
}
