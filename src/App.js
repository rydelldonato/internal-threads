import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/home/home";
import ScrollToTop from "./components/scrollToTop/scrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
