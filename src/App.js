import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Moviedetails } from "./components/MovieDetails/Moviedetails";
import PageNotFound from "./PageNotFound/PageNotFound";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            {" "}
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:imdbID" element={<Moviedetails />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
