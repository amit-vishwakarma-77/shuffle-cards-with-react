const Card = ({ cardNo, setCardOnClick }) => {
  const cardClickHandler = (cardNo) => {
    setCardOnClick(cardNo);
  };

  return (
    <div
      className="h-24 w-24 border-2 m-2 flex items-center justify-center "
      name={cardNo}
      onClick={() => cardClickHandler(cardNo)}
    >
      Card {cardNo}
    </div>
  );
};
export default Card;
