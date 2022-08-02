import React from "react";
import GameCategory from "./GameCategory";
import GameRow from "./GameRow";

export default function GameTable({ games }) {
  console.log(`GameTable -> games length : ${games.length}`);

  const row = [];
  games.forEach((game) => {
    row.push(<GameRow key={game.name} game={game} />);
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
        {row}
      </table>
      <GameCategory />
    </div>
  );
}
