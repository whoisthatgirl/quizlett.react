import React from "react";

interface Card {
  question: string;
  answer: string;
  flipped ?: boolean; 
}

interface FlashcardProps {
  card: Card;
  index: number;
  flipCard: (index: number) => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ card, index, flipCard }) => {
  return (
    <div
      onClick={() => flipCard(index)}
      className={`flashcard ${card.flipped ? "flipped" : ""}`}
    >
      <p>{card.flipped ? card.answer : card.question}</p>
    </div>
  );
};

export default Flashcard;
