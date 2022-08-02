import "./App.css";
import FilterableGameTable from "./game/FilterableGameTable";

function App() {
  const games = [];

  games.push({
    category: "Infiltration",
    name: "Metal Gear Solid 1",
    price: 5,
    stocked: true,
  });

  games.push({
    category: "Infiltration",
    name: "Metal Gear Solid Phantom Pain",
    price: 15,
    stocked: false,
  });

  games.push({
    category: "Infiltration",
    name: "Metal Gear Solid Snake Eater",
    price: 120,
    stocked: true,
  });

  games.push({
    category: "FPS",
    name: "Valorant",
    price: 0,
    stocked: true,
  });

  games.push({
    category: "FPS",
    name: "Minecraft",
    price: 10,
    stocked: true,
  });

  return (
    <div className="App">
      <FilterableGameTable games={games} />
    </div>
  );
}

export default App;
