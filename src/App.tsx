import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Header />
      {/* <main className="flex min-h-screen items-center justify-center bg-black">
        <h1 className="text-5xl font-bold text-white">Monte Carlo Vermouth</h1>
      </main> */}
      <HomePage />
    </>
  );
}

export default App;
