
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

