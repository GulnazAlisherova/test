import './App.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
        <Route path="/delivery" element={<h1>Delivery</h1>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
