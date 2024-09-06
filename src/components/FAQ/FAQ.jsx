import React, { useState, useEffect } from "react";
import "./FAQ.css"; // Ensure this file has styles that might be necessary for your layout

const FAQItem = ({ question, isOpen, onClick, isLargeScreen }) => (
  <div className="relative">
    <div
      className={`tw-p-3 tw-m-2 tw-cursor-pointer tw-border tw-rounded-xl tw-border-gray-300 tw-flex tw-items-center ${
        isOpen
          ? "tw-bg-white tw-text-black tw-border-gray-300 tw-font-bold"
          : "tw-bg-black tw-text-white"
      }`}
      onClick={onClick}
    >
      <div className="tw-flex-grow">{question.text}</div>
      <div className="tw-w-5 tw-h-5 tw-rounded-full tw-bg-black"></div>
    </div>
    {!isLargeScreen && isOpen && (
      <div className="tw-p-4 tw-m-2 tw-border tw-border-gray-300 tw-rounded-xl tw-bg-black tw-text-white">
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
      <h1 className="FAQtext tw-text-5xl">FAQS</h1>
      <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-space-x-8 tw-justify-center tw-p-5">
        <div className={`lg:tw-w-1/2 ${isLargeScreen ? "tw-flex tw-flex-col" : ""}`}>
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
          <div className="lg:tw-w-1/2 tw-p-4 tw-border tw-border-gray-300 tw-rounded-3xl tw-bg-black tw-text-white">
            <h2 className="tw-mb-2">Answer:</h2>
            <p>{faqs[openIndex].answer}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default FAQ;
