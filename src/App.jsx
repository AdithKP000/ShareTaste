import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Courses from './pages/Courses';
import About from './pages/About';
import Support from './pages/Support';
import NotFound from './pages/NotFound';
import Footer from './footer/Footer';
import LoginSignUp from './components/LoginSignUp';

function App() {
  return (
    <div className='app-container'>
      <div className='content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/loginsignup" element={<LoginSignUp/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;