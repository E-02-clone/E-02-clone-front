import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Write from "../pages/Write";
import Header from "../components/Header";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
