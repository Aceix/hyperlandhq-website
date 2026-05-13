
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ThemeProvider } from './components/ThemeContext';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CaptionHype from './pages/CaptionHype';

// Scroll to top and trigger page animation
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname, hash } = useLocation();
  
  React.useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/captionhype" element={<CaptionHype />} />
            </Routes>
          </PageWrapper>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
