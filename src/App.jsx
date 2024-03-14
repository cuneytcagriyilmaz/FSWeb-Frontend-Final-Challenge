import React, { useState, useEffect } from 'react';
import './App.css'
import Mode from './coponents/mode/Mode'
import Header from './coponents/header/Header'
import Hero from './coponents/hero/Hero'
import Skills from './coponents/skills/Skills'
import Profile from './coponents/profile/Profile'
import Projects from './coponents/projects/Projects'
import Footer from './coponents/footer/Footer'
import { DataContext } from "./context/DataContext";
import { data } from "./data/data";

function App() {

  const storedLang = localStorage.getItem("lang");
  const defaultLang = storedLang ? storedLang : "en";
  const [langPre, setLangPre] = useState(defaultLang);
  const langHandler = () => {
    const newLang = langPre === "en" ? "tr" : "en";
    setLangPre(newLang);
    localStorage.setItem("lang", newLang);
  };
  const content = langPre === "tr" ? data.tr : data.en;
  const contentProjects = langPre === "tr" ? "tr" : "en";

  useEffect(() => {
    if (!storedLang) {
      localStorage.setItem("lang", defaultLang);
    }
  }, [storedLang, defaultLang]);


  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'light';
  });

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);



  // const data = {
  //   content,
  //   contentProjects,
  //   langHandler,
  //   langPre,
  //   theme,
  //   toggleTheme,
  // };

  return (
    <DataContext.Provider value={{
      content,
      contentProjects,
      langHandler,
      langPre,
      theme,
      toggleTheme,
    }}>
      <Mode />
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />

    </DataContext.Provider>
  );
}

export default App;
