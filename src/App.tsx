import { Header } from './components/Header';
import { Main } from './components/Main';
import { ScoreProvider } from './hooks/useScore';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ScoreProvider>
      <Header />
      <Main />
      
      <GlobalStyle />
    </ScoreProvider>
  );
};
