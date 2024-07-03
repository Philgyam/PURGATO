import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleFAQ}>
        <h3>{question}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

function FAQ() {
  const faqs = [
    { question: 'What services do you offer?', answer: 'We offer a variety of cleaning services including residential, commercial, and specialized cleaning services.' },
    { question: 'What are your rates?', answer: 'Our rates vary depending on the type and frequency of the service. Please contact us for a detailed quote.' },
    { question: 'Are your cleaners insured?', answer: 'Yes, all our cleaners are fully insured for your peace of mind.' },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQ;
