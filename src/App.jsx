// App.js
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from "./Components/Layout";
import AdminLayout from "./Components/AdminLayout";
import About from './Pages/About';
import Services from './Pages/Services';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import BlogDetails from './Pages/BlogDetails';
import { useEffect, useState } from 'react';

import { Helmet } from "react-helmet";

const App = () => {
   const [blogInfo, setBlogInfo] = useState([]);

   useEffect(() => {
      fetch('https://dev.the-webcoder.com/wp-json')
         .then(response => response.json())
         .then(json => {
            setBlogInfo(json);
         })
         .catch(error => {
            console.error(error);
         });
   }, []);

   return (
      <BrowserRouter>
         <div className="app">
            <Routes>
               <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blogs/:slug" element={<BlogDetails />} />
               </Route>
            </Routes>
         </div>
      </BrowserRouter>
   );
};
export default App;