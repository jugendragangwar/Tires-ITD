import React from 'react';
import Footer from '../../components/Footer/NewFooter';
import Navbar from '../../components/navbar/Header';
import { TermsAndConditionData } from '../../Constants/Constant';

function TermsCondition() {
  return (
    <>
      <Navbar />
      <div className="container mx-2 sm:mx-auto Section-Margin">
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 my-6">
            {TermsAndConditionData.title}
          </h1>
          {TermsAndConditionData.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">{section.heading}</h2>
              {section.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-gray-700 mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TermsCondition;
