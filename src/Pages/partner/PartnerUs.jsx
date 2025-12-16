import React from 'react';
import logo3 from '../../assets/logo3.png';
import partner1 from '../../assets/partner1.jpeg';
import house from '../../assets/house.png';

const PartnerUsPage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${partner1})`,
    backgroundSize: 'cover',
    width: '100vw',
    height: '50vh',
  };
  const handleLogin = () => {
    window.location.href = '/LoginPage';
  };
  const handlePartner = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      <div className="flex p-4 w-full bg-white items-center">
        <a href="/" className="block">
          <img src={logo3} alt='Icon' className='h-8 w-auto' />
        </a>
      </div>
      <div className="max-w-full mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-cover bg-center" style={backgroundImageStyle}></div>
          <div className="relative z-10 p-6 text-white font-bold lg:ml-16 md:ml-10">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-red-500">The ITD Advantage</h1>
            <p className="text-sm lg:text-xl mb-4">Let's grow your business together.</p>
            <p className="text-sm lg:text-xl mb-6">
              If you're interested in becoming a retail tires and wheels partner,<br />
              select an option below. If you have any questions,<br />
              please contact us via Email, or call us at <a href="tel:8800666339" className="text-blue-800">+91 880-066-6339</a>.
            </p>
            <div className="lg:flex items-center justify-between space-y-4 lg:space-y-0">
              {[
                {
                  title: "Begin Your Partnership",description: "Complete our quick partner application.",buttonLabel: "PARTNER WITH US",
                  imageUrl: "https://cdn.pixabay.com/photo/2024/02/02/09/12/ai-generated-8547724_1280.jpg",onClick: handlePartner,
                },
                {
                  title: "Returning Partner?",description: "Continue where you left off or view your application status.",buttonLabel: "LOGIN",
                  imageUrl: "https://cdn.pixabay.com/photo/2024/02/02/09/12/ai-generated-8547729_1280.jpg",onClick: handleLogin,
                },
              ].map(({ title, description, buttonLabel, imageUrl, onClick }, index) => (
                <div
                  key={index}
                  className="bg-white text-black lg:flex border border-gray-300 p-6 lg:p-8 rounded-lg w-full lg:w-1/2 space-y-4 lg:space-y-0 lg:space-x-4 items-center"
                >
                  <img
                    src={imageUrl}
                    alt={title}
                    className="h-24 lg:h-48 w-24 lg:w-48 mx-auto"
                  />
                  <div className="text-center lg:text-left">
                    <h2 className="text-xl lg:text-2xl font-bold mb-2">{title}</h2>
                    <p className="text-sm">{description}</p>
                    <button
                      onClick={onClick}
                      className="bg-blue-900 hover:bg-blue-800 text-white font-bold p-2 w-full rounded-lg mt-4"
                    >
                      {buttonLabel}
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-6 p-4 space-y-4 lg:space-y-0 lg:space-x-4">
          <img src={house} alt='House Icon' className='h-12 lg:h-8 w-auto' />
          <div>
            <h2 className="text-xl lg:text-2xl font-bold">Don't Have a Retail Tire Business?</h2>
            <p className="text-sm lg:text-base">ITD has several great programs for consumers and contractors working from home.</p>
            <a href="/learn" className="text-blue-900 font-bold">Learn More</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default PartnerUsPage;