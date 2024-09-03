import React, { useState, useEffect } from "react";
import "./FAQ.css"; // Ensure this file has styles that might be necessary for your layout

const FAQItem = ({ question, isOpen, onClick, isLargeScreen }) => (
  <div className="relative">
    <div
      className={`p-3 m-2 cursor-pointer border rounded-xl border-gray-300 flex items-center ${
        isOpen
          ? "bg-white text-black border-gray-300 font-bold"
          : "bg-black text-white"
      }`}
      onClick={onClick}
    >
      <div className="flex-grow">{question.text}</div>
      <div className="w-5 h-5 rounded-full bg-black"></div>
    </div>
    {!isLargeScreen && isOpen && (
      <div className="p-4 m-2 border border-gray-300 rounded-xl bg-black text-white">
        <p>{question.answer}</p>
      </div>
    )}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default to first question
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1057);

  const faqs = [
    {
      id: "01",
      text: "When and where is Robowars happening?",
      answer:
        "Robowars will be happening during Gravitas and will be from 30th Sep to 2nd Oct at the Outdoor stadium. Stay tuned for the timings!",
    },
    { id: "02", text: "Number of teams participating", answer: "40+." },
    {
      id: "03",
      text: "How can you attend this event?",
      answer:
        "Go to Gravitas website and search for Robowars and register for the event!",
    },
    {
      id: "04",
      text: "How long is the event?",
      answer: "It happens for 4 hours throughout the day for up to 3 days!",
    },
    {
      id: "05",
      text: "Who is eligible to participate?",
      answer:
        "If you’re a part of a team that builds bots and bots follow our regulations. Check out the rulebook above!",
    },
    {
      id: "06",
      text: "How long does each match usually last?",
      answer: "3 minutes each.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <h1 className="FAQtext text-5xl">FAQS</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-8 justify-center p-5">
        <div className={`lg:w-1/2 ${isLargeScreen ? "flex flex-col" : ""}`}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              question={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              isLargeScreen={isLargeScreen}
            />
          ))}
        </div>

        {isLargeScreen && openIndex !== null && (
          <div className="lg:w-1/2 p-4 border border-gray-300 rounded-3xl bg-black text-white">
            <h2 className="mb-2">Answer:</h2>
            <p>{faqs[openIndex].answer}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default FAQ;
