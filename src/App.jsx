import './App.css';
import './fonts/Druk-cyr/stylesheet.css';

import Audience from './components/Audience/Audience';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Packages from './components/Packages/Packages';

function App() {
  return (
    <>
      <div className="heroAudienceWrapper">
        <Header />
        <Hero className="hero" />
        <Audience />
      </div>
      <Packages />
    </>
  );
}

export default App;
