import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";

import {Routes, Route} from "";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/delivery" element={<h1>Delivery</h1>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
