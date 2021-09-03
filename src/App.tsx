import { GlobalStyle } from './styles/global'
import { Routes } from './routes'
import { ContextProvider } from './context'

function App() {
  return (
    <>
      <ContextProvider>
        <Routes />
        <GlobalStyle />
      </ContextProvider>
    </>
  );
}

export default App;
