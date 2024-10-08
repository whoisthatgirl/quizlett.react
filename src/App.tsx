import { useState } from "react";
import FlashcardList from "./components/FlashcardList";
import FlashcardForm from "./components/FlashcardForm";
import "./style.css";

interface FlashCard {
  question: string;
  answer: string;
  flipped: boolean;
}

const App: React.FC = () => {
  const [cards, setCards] = useState<FlashCard[]>([
    {
      question: "What is React?",
      answer: "A JavaScript library for building UIs",
      flipped: false,
    },
    {
      question: "What does Immutable mean in React.js?",
      answer:
        "An immutable object is an object that, once created, cannot be changed",
      flipped: false,
    },
  ]);

  const flipCard = (index: number) => {
    setCards(
      cards.map((card, i) =>
        i === index ? { ...card, flipped: !card.flipped } : card
      )
    );
  };

  const addCard = (question: string, answer: string) => {
    setCards([...cards, { question, answer, flipped: false }]);
  };

  return (
    <div className="main">
      <h2>Quizlet</h2>
      <h4>Create Your Own FlashCards</h4>
      <FlashcardForm addCard={addCard} />
      <FlashcardList cards={cards} flipCard={flipCard} />
    </div>
  );
};

export default App;
