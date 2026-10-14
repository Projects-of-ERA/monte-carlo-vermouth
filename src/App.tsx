import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import StoryPage from './pages/StoryPage/StoryPage';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <>
      <div className="site-wrapper">
        <ScrollToTop />

        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story" element={<StoryPage />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
