import React from 'react';

import { About, Footer, Header, Projects, Skills, Testimonials } from './containers';

const App = () => {
  return (
    <div className="app">
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