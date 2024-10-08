import React from "react";
import Flashcard from "./Flashcard";

interface Card {
  id?: number; 
  question: string;
  answer: string;
  
}

interface FlashcardListProps {
  cards: Card[];
  flipCard: (index: number) => void;
}

const FlashcardList: React.FC<FlashcardListProps> = ({ cards, flipCard }) => {
  return (
    <div className="flash">
      {cards.map((card, index) => (
        <Flashcard key={index} card={card} index={index} flipCard={flipCard} />
      ))}
    </div>
  );
};

export default FlashcardList;
