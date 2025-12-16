import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What types of tyres do you offer?",
      answer:
        "We provide a wide range of tyres, including passenger car tyres, truck tyres, off-road tyres, and specialty tyres. Whatever your needs, we have the perfect fit."
    },
    {
      question: "How do I choose the right tyres for my vehicle?",
      answer:
        "You can use our online tyre selector tool or consult with our experts. Simply provide your vehicle details, and we'll recommend the best options for you."
    },
    {
      question: "Do you offer installation services?",
      answer:
        "Yes, we have a network of certified service centers where you can get your tyres installed professionally. You can book an appointment at a location convenient for you."
    },
    {
      question: "What is your warranty policy?",
      answer:
        "Our tyres come with a comprehensive warranty that covers manufacturing defects. The duration of the warranty varies depending on the tyre model. Please check our warranty terms for more details."
    },
    {
      question: "Do you provide support for bulk purchases?",
      answer:
        "Absolutely! We cater to bulk purchases for businesses and fleets. Contact our sales team for customized pricing and support."
    }
  ];


  return (
    <section className="Section-Margin py-5 bg-[#EEECEC]">
      <div className="max-w-4xl mx-auto">
        <header className="text-center">
          <h1 className="main-Heading">
            Frequently Asked Questions
          </h1>
        </header>

        <ol className="space-y-4 mt-6">
          {questions.map((item, index) => (
            <li
              key={index}
              className="transition-all duration-700 ease-in-out border-b border-gray-500"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-4 sm:p-4"
                onClick={() => toggleAnswer(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <ol className="text-base  text-left font-medium text-black">
                  {item.question}
                </ol>
                <FiChevronDown
                  className={`w-6 h-6 text-black transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              {activeIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-4 pb-5 sm:px-6 sm:pb-6"
                >
                  <p className="text-gray-800 text-sm md:text-base">{item.answer}</p>
                </div>
              )}
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
};

export default FAQs;
