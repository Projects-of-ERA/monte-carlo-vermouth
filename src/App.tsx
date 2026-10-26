import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import StoryPage from './pages/StoryPage/StoryPage';
import ScrollToTop from './utils/ScrollToTop';
import VermouthPage from './pages/VermouthPage/VermouthPage';
import MixologyPage from './pages/MixologyPage/MixologyPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import NewsPage from './pages/NewsPage/NewsPage';

const languages = ['', '/fr', '/es'];

function App() {
  return (
    <div className="site-wrapper">
      <ScrollToTop />

      <Header />

      <Routes>
        {languages.map((prefix) => (
          <Route key={prefix} path={prefix || '/'}>
            <Route index element={<HomePage />} />
            <Route path="story" element={<StoryPage />} />
            <Route path="vermouth" element={<VermouthPage />} />
            <Route path="mixology" element={<MixologyPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="news" element={<NewsPage />} />
          </Route>
        ))}

        <Route path="*" element={<h1>404 — Page Not Found</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
