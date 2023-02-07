import React from 'react';

import { About, Footer, Header, Projects, Skills, Testimonials } from './containers';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;