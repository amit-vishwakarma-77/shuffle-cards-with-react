import "./App.css";
import Card from "./components/cards";
import { useEffect, useState } from "react";

const uniqueCardsList = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

function App() {
  const [cardsDeck, setCardDeck] = useState([...uniqueCardsList]);

  const [clickOnCard, setCardOnClick] = useState(0);
  const [cardSelected, selectCard] = useState(0);
  const [cardToVerify, setCardToVerify] = useState(0);

  const verifyCardsMatch = () => {
    if (cardSelected === cardToVerify) {
      removeCardsFromDeck(cardSelected);
    } else {
    }
  };
  const removeCardsFromDeck = (cardSelected) => {
    const updatedCardDeck = cardsDeck.filter(
      (cardNo) => cardNo !== cardSelected
    );
    setCardDeck(updatedCardDeck);
  };
  useEffect(() => {
    if (!cardSelected) {
      selectCard(clickOnCard);
    } else if (!cardToVerify) {
      setCardToVerify(clickOnCard);
      verifyCardsMatch();
    }
  }, [clickOnCard]);

  console.log("card selected", clickOnCard);
  return (
    <>
      <div className="flex">
        {cardsDeck.map((cardNo, index) => (
          <Card
            key={"card-" + index + cardNo}
            cardNo={cardNo}
            setCardOnClick={setCardOnClick}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default App;
