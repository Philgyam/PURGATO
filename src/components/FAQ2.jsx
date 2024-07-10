import React, { useState } from 'react';

function FAQItem2({ question, answer }) {
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

function FAQ2() {
  const faqs = [
    { question: 'Can I cancel a booking after processing has started?', answer: 'Depending on the kind of booking made, canceling a booking is possible. Some bookings might attract a fee for cancelling' },
    { question: 'What are your rates?', answer: 'Our rates vary depending on the type and frequency of the service. Please contact us for a detailed quote.' },
    { question: 'Are your cleaners insured?', answer: 'Yes, all our cleaners are fully insured for your peace of mind.' },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq-section">
      <h2 className='text-2xl'>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem2 key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQ2;
