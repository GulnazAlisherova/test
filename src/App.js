import { Route, Routes } from "react-router-dom";
import Home from "../src/components/pages/Home";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Delivery from "./components/pages/Delivery";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/delivery" element={<Delivery />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;