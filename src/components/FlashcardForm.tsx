import React, { FormEvent, useState } from 'react';

interface FlashcardFormProp{
  addCard: (question: string, answer: string) => void;
}

interface Card{
  question: string;
  answer: string;
}

const FlashcardForm: React.FC<FlashcardFormProp> = ({ addCard }) => {

  const [card, setCard] = useState<Card>({
    question: '',
    answer: ''

  })
  
  
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    const { question, answer } = card;
    if (question && answer) {
      addCard(question, answer);
      setCard({
        question: '',
       answer:''
      });
    }
  };
  
  return (
    <form  id='myform' onSubmit={handleSubmit}>
      <input className='myInput'
        type="text"
        placeholder="Question"
        value={card.question}
         onChange={(e) => setCard({ 
          ...card,
          question: e.target.value
         })}
      />
      <input
        type="text" className='myInput'
        placeholder=" Answer"
        value={card.answer}
        onChange={(e) => setCard({ 
          ...card, 
          answer: e.target.value 
        })}
      />
      <button type="submit">Add </button>
    </form>
  );
}

export default FlashcardForm;
