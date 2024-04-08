import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import Header from './components/Header/Header';
import MainBlock from './components/MainBlock/MainBlock';
import { GlobalStyle } from './styles/global.styled'
import { cardList } from './lib/data'

function App() {
  const [taskList, setTaskList] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout();
  }, [])

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        {/* pop-up start*/}

        <PopExit />

        <PopNewCard />

        <PopBrowse />

        {/* pop-up end*/}

        <Header setTaskList={setTaskList} taskList={taskList} />

        <MainBlock taskList={taskList} isLoading={isLoading} />

      </div>
    </>
  )
}

export default App
