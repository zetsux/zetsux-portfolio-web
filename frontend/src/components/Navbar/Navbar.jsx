import React, { useState } from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import { HiOutlineMenu, HiX, HiHome, HiUser, HiOutlineCode, HiOutlineSparkles, HiPhone } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const items = ['home', 'about', 'projects', 'skills', 'contact'];
  let itemIdx = 0;

  return (
    <nav className="app__navbar">
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="Logo"/>
      </div>

      <ul className='app__navbar-links'>
        {[HiHome, HiUser, HiOutlineCode, HiOutlineSparkles, HiPhone].map((Icon) => (
          <li key={`link-${items[itemIdx]}`} className="app__flex p-text">
            <div><Icon /></div>
            <a href={`#${items[itemIdx]}`}>{items[itemIdx++]}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiOutlineMenu onClick={() => setToggle(true)} />

        {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
      </div>
    </nav>
  );
}

export default Navbar;