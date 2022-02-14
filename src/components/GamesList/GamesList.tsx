import GameItem from "../GameItem/GameItem";
import classes from "./GamesList.module.scss";

const GamesList = () => {
  const GAMES = [
    {
      id: 1,
      title: "Sifu",
      description:
        "Third person action game featuring intense hand-to-hand combat",
      price: 29.99,
    },
    {
      id: 2,
      title: "Wartales",
      description: "Open world RPG in which you lead a group of mercenaries",
      price: 12.89,
    },
  ];

  return (
    <section className={classes.list}>
      <ul>
        {GAMES.map((game) => {
          return (
            <GameItem
              key={game.id}
              title={game.title}
              description={game.description}
              price={game.price}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default GamesList;
