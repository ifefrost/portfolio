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
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
