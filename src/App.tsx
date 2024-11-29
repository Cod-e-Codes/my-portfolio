import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import ProjectsPage from './components/ProjectsPage';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection'; // Import the animation wrapper
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures scrolling to the top on route change */}
      <div className="bg-gray-900 text-white w-full min-h-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AnimatedSection><Hero /></AnimatedSection>
                <AnimatedSection><About /></AnimatedSection>
                <AnimatedSection><Stats /></AnimatedSection>
                <AnimatedSection><Skills /></AnimatedSection>
                <AnimatedSection><Certifications /></AnimatedSection>
                <AnimatedSection><Projects /></AnimatedSection>
                <AnimatedSection><Testimonials /></AnimatedSection>
                <AnimatedSection><Contact /></AnimatedSection>
              </>
            }
          />
          <Route path="/all-projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
