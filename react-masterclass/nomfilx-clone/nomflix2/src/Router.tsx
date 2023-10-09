import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import TV from "./Routes/TV";
import Search from "./Routes/Search";
import Header from "./Components/Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/tv" element={<TV />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
