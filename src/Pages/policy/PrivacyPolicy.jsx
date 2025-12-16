import React from 'react';
import Navbar from '../../components/navbar/Header';
import Footer from '../../components/footer/NewFooter';
import { privacyPolicyData } from '../../Constants/Constant';

function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="container mx-2 sm:mx-auto Section-Margin">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 my-6">{privacyPolicyData.title}</h1>
        {privacyPolicyData.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">{section.heading}</h2>
            {section.content.map((item, idx) => {
              if (typeof item === 'string') {
                return <p className='text-sm sm:text-base text-gray-700 mb-4' key={idx}>{item}</p>;
              } else if (item.list) {
                return (
                  <ul className='list-disc pl-5 text-gray-700 mb-4' key={idx}>
                    {item.list.map((listItem, listIdx) => (
                      <li key={listIdx} className="text-sm sm:text-base">{listItem}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
