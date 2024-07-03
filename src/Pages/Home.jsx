import React,{useEffect} from 'react';
import Header from '../components/Header';
import background from '../assets/images/back1.png';
import Content from '../components/Content';
import Booking from '../components/Booking';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Service from '../components/Service';
import FAQ from '../components/FAQ';
import Leaflet from '../components/Leaflet';
import Footer from '../components/Footer';




function Home() {

  useEffect(()=>{
    AOS.init({
      once: true, // Whether animations should only happen once
      duration: 500, // Animation duration
      easing: 'ease', // Easing function
    });
  },[])

 
  return (
    <div className='w-full h-full ' style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <Header />
      <Content />
      <Service/>
      <Booking/>
      <Leaflet/>
      <Footer/>
      
   
    </div>
  );
}

export default Home;
