import React from "react";

export default function GameRow({ game }) {
  let name;

  if (game.stocked) {
    name = game.name;
  } else {
    name = <span style={{ color: "red" }}>{game.name}</span>;
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{game.price}$</td>
    </tr>
  );
}
