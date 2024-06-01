import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import Home from './pages/home.jsx';
import Blog from './pages/blog.jsx';
import Gallery from './pages/gallery.jsx';
import Feedback from './pages/feedback.jsx';
import MyForm from './pages/Dashboard.jsx';
import TentangKami from './pages/TentangKami.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin" element={<MyForm />} />
        <Route path="/tentangkami" element={<TentangKami />} />
      </Routes>
    </Router>
  </React.StrictMode>
);