import logo from "./logo.svg";
import "./App.css";
import { Sidebar } from "./component/sidebar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
