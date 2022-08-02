import React from "react";

export default function GameCategory({ game }) {
  return (
    <tr>
      <th colSpan="2">{game.category}</th>
    </tr>
  );
}
