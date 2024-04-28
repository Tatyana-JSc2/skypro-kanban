import React, { useEffect, useState } from 'react'
import MainBlock from '../components/MainBlock/MainBlock'
import { cardList } from '../lib/data';
import Header from '../components/Header/Header';
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { getTasks } from '../api';


//до апи в useState на стр15 лежал cardList(свой местный список задач)

//<Header setTaskList={setTaskList} taskList={taskList} />

const MainPage = ({user}) => {

  const [taskList, setTaskList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTasks({token: user.token}).then((data) => {
      //throw new Error("Ошибка сервера");
      setTaskList(data.tasks);
    }).catch((err) => {
      setError(err.message);
      console.log(err.message);
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <MainBlock setTaskList={setTaskList} taskList={taskList} isLoading={isLoading} error={error} user={user}/>
      <Outlet />
    </>
  )
}

export default MainPage
