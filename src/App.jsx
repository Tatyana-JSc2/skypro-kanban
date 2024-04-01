import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import Header from './components/Header/Header';
import MainBlock from './components/MainBlock/MainBlock';

function App() {

  return (

    <div className="wrapper">
      {/* pop-up start*/}

      <PopExit />

      <PopNewCard />

      <PopBrowse />

      {/* pop-up end*/}

      <Header />

      <MainBlock />

    </div>

  )
}

export default App
