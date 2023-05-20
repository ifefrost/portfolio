import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fontsource/gwendolyn/700.css";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='dark:bg-slate-900 bg-white min-h-screen flex flex-col'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
