import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
    <div className="faq-question">
      <div className="faq-number">{question.id}</div>
      <div className="faq-text">{question.text}</div>
      <div className="faq-toggle">{isOpen ? '-' : '+'}</div>
    </div>
    {isOpen && <div className="faq-answer">{answer}</div>}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { id: '01', text: 'When and where is Robowars happening?', answer: 'Robowars will be happening during Gravitas and will be from 30th Sep to 2nd Oct at the Outdoor stadium. Stay tuned for the timings!' },
    { id: '02', text: 'Number of teams participating', answer: '40+.' },
    { id: '03', text: 'How can you attend this event?', answer: 'Go to Gravitas website and search for Robowars and register for the event!' },
    { id: '04', text: 'How long is the event?', answer: 'It happens for 4 hours throughout the day for up to 3 days!' },
    { id: '05', text: 'Who is eligible to participate?', answer: 'If you’re a part of a team that builds bots and bots follow our regulations. Check out the rulebook above!' },
    { id: '06', text: 'How long does each match usually last?', answer: '3 minutes each.' },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <h1 className="faqText">FAQs</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.id}
            question={faq}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
