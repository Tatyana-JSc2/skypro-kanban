import { useEffect, useState } from 'react'
import MainBlock from '../components/MainBlock/MainBlock'
import { Outlet } from "react-router-dom";
import { getTasks } from '../api';
import { useUser } from '../context/hooks/useUser';
import { useTasks } from '../context/hooks/useTasks';


//до апи в useState на стр15 лежал cardList(свой местный список задач)



const MainPage = () => {
  //const [taskList, setTaskList] = useState([]);
  const { setTaskList } = useTasks();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    getTasks({ token: user.token }).then((data) => {
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
      <MainBlock isLoading={isLoading} error={error} />
      <Outlet />
    </>
  )
}

export default MainPage
