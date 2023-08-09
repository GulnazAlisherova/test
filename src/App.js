import { Route, Routes } from "react-router-dom";
import Home from "../src/components/pages/Home";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Delivery from "./components/pages/Delivery";
import NotFound from "./components/pages/NotFound";
import Layout from "./components/Layout/Layout";

export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],

  // контекст для корзины
  cart: {}, // содержимое корзинки
  setCart: () => { }, // изменить содержимое корзики

  user: null,
});

function App() {
  return (
    <div className="App">
      <AppContext.Provider
        value={{ categories, products, cart, setCart, user, orders }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />

            <Route path="*" element={<NotFound />} />
          </Routes>

        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;