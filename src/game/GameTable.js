import React from "react";
import GameCategory from "./GameCategory";
import GameRow from "./GameRow";

export default function GameTable({ games, filterText, inStockOnly }) {
  let lastCategory = "";

  const rows = [];
  games.forEach((game) => {
    if (game.name.toLowerCase().indexOf(filterText) === -1) {
      //indeOf loop on string a return a value + if find character else return -1
      // so if === -1 no name so return don't add game
      return;
    }

    if (inStockOnly && !game.stocked) return;

    if (game.category !== lastCategory) {
      rows.push(<GameCategory key={game.category} game={game} />);
    }
    rows.push(<GameRow key={game.name} game={game} />);
    lastCategory = game.category;
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        {rows}
      </table>
      {/* <GameCategory game={games[0].category} /> */}
    </div>
  );
}
