import React from 'react';
import '../../App.css';
import './Home.css'
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from '../Footer';
import { Button } from '../Button';
import HeroSection from '../HeroSection';

const Home = () => {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      scrollHorizontally={true}
      navigation={true}
      sectionsColor={["orange", "purple", "green"]}
      render={() => {
        return (
          <>
            <div id="fullpage-wrapper">
              <div className="section">
                <HeroSection />
                
              </div>

              <div className="section section1">
                <h3>Section 2</h3>
              </div>

              <div className="section section2">
                <h3>Section 3</h3>

              </div>
            </div>
          </>
        );
      }}
    />
  );
};


export default Home;
