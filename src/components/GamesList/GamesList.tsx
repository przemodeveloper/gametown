import GameItem from "../GameItem/GameItem";
import classes from "./GamesList.module.scss";
import Container from "react-bootstrap/Container";

const GamesList = () => {
  const GAMES = [
    {
      id: 1,
      title: "Sifu",
      description:
        "Third person action game featuring intense hand-to-hand combat",
      price: 29.99,
      image: "https://i.iplsc.com/sifu/000EILQDE225H421-C122-F4.jpg",
    },
    {
      id: 2,
      title: "Elden Ring",
      description:
        "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring",
      price: 12.89,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202107/1612/Y5RHNmzAtc6sRYwZlYiKHAxN.png",
    },
  ];

  return (
    <Container>
      <div className={classes.list}>
        {GAMES.map((game) => {
          return (
            <GameItem
              key={game.id}
              title={game.title}
              description={game.description}
              price={game.price}
              image={game.image}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default GamesList;
