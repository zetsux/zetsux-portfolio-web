import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const About = () => {
  const abouts = [
    {title : 'Backend Development', description : "I am currenly learning backend development by doing projects using Node.Js or Laravel", imgUrl: images.about01},
    {title : 'Frontend Development', description : "I am currently learning frontend development by studying Tailwind and NextJs (React)", imgUrl: images.about02},
    {title : 'Fullstack Development', description : 'I want to be a fullstack developer, therefore learning both backend and frontend', imgUrl: images.about03},
    {title : 'App Development', description : 'I want to learn about application development in the near future, starting with Flutter (Dart)', imgUrl: images.about04},
  ]


  return (
    <>
      <h2 className="head-text" style={{ marginTop: 30 }}>I'm currently in need of <span>Knowledges</span><br /> and <span>Experiences</span> in Programming
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.65, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="bold-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About;