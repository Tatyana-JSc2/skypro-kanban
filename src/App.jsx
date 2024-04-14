
import './App.css'
import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import Header from './components/Header/Header';
import MainBlock from './components/MainBlock/MainBlock';
import { GlobalStyle } from './styles/global.styled'
import { Wrapper } from './styles/shared';
import AppRoutes from './AppRoutes';



function App() {

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <AppRoutes />
      </Wrapper>
    </>
  )
}

export default App


//{/* pop-up start*/}
//<PopExit />
//<PopNewCard />
//<PopBrowse />
//{/* pop-up end*/}
//<Header setTaskList={setTaskList} taskList={taskList} />
//<MainBlock taskList={taskList} isLoading={isLoading} />