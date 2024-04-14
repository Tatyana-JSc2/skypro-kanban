import React, { useEffect, useState } from 'react'
import MainBlock from '../components/MainBlock/MainBlock'
import { cardList } from '../lib/data';
import Header from '../components/Header/Header';
import { Navigate, Outlet, Route, Routes } from "react-router-dom";




//<Header setTaskList={setTaskList} taskList={taskList} />

const MainPage = () => {

  const [taskList, setTaskList] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout();
  }, []);


  return (
    <>
      <Header setTaskList={setTaskList} taskList={taskList} />
      <MainBlock taskList={taskList} isLoading={isLoading} />
      <Outlet />
    </>
  )
}

export default MainPage
