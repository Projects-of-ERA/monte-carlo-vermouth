import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import StoryPage from './pages/StoryPage/StoryPage';
import ScrollToTop from './utils/ScrollToTop';
import VermouthPage from './pages/VermouthPage/VermouthPage';
import MixologyPage from './pages/MixologyPage/MixologyPage';

function App() {
  return (
    <>
      <div className="site-wrapper">
        <ScrollToTop />

        <Header />

        <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/vermouth" element={<VermouthPage />} />
          <Route path="/mixology" element={<MixologyPage />} /> */}
          <Route path="/:lang?" element={<HomePage />} />
          <Route path="/:lang?/story" element={<StoryPage />} />
          <Route path="/:lang?/vermouth" element={<VermouthPage />} />
          <Route path="/:lang?/mixology" element={<MixologyPage />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
