import React,{useState} from 'react';
import clean from '../assets/images/clean.jpg'
import background from '../assets/images/back1.png';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import Upperheader from '../components/Upperheader';















const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#005C78] shadow-md px-2 h-[3rem] flex justify-end py-8 md:flex  md:items-center">
      

      <div className="flex md:hidden items-center mt-[-1.5rem] justify-end">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
         
        </button>
      </div>

      {isMenuOpen && <Dropdown isMenuOpen={isMenuOpen } toggleDropdown={toggleMenu} />}

  

        
       
     
    </header>
  );
}





function About() {
  return (
    <div className='w-full h-full bg-[#EEF7FF] ' style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <Upperheader/>
        <Header />
      <h1 className="text-4xl lg:text-6xl font-bold text-center mb-12 text-[#164B60]">About Us</h1>

      <div className="flex flex-col lg:flex-row lg:gap-16 items-center">
        <div className="lg:w-1/2">
          <img src={clean} alt="About Us" className="rounded-lg shadow-xl mb-8 lg:mb-0" />
        </div>
        <div className="lg:w-1/2">
          <div className="pl-4 lg:pl-0">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#164B60]">Our Vision</h2>
            <p className="text-lg leading-relaxed mb-6">
              Our vision is to redefine cleanliness and service excellence in the community. We aim to be recognized as
              the leading provider of professional cleaning services, setting the highest standards in the industry.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex flex-col lg:flex-row lg:gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="pl-4 lg:pl-0">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#164B60]">Our Mission</h2>
              <p className="text-lg leading-relaxed mb-6">
                Our mission is to enhance the quality of life for our customers by delivering impeccable cleaning
                services. We are committed to using eco-friendly products and innovative techniques to achieve spotless
                results while preserving the environment.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <img
              src={clean}
              alt="Mission Image"
              className="rounded-lg shadow-xl mb-8 lg:mb-0"
            />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl lg:text-4xl ml-4 font-bold mb-6 text-[#164B60]">Why Choose Us?</h2>
        <div className="flex flex-col lg:flex-row lg:gap-16">
          <div className="lg:w-1/2">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-[#164B60]">Expertise and Experience</h3>
            <p className="text-lg leading-relaxed mb-6">
              With over a decade of experience, we have honed our skills to deliver exceptional cleaning solutions for
              homes and businesses.
            </p>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-[#164B60]">Customer Satisfaction</h3>
            <p className="text-lg leading-relaxed mb-6">
              We prioritize customer satisfaction and go the extra mile to exceed expectations with every service we
              provide.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default About;
