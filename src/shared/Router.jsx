import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from '../pages/Detail'
import Test from '../pages/Test';
import WishLists from '../pages/WishLists';
import Wish from '../pages/Wish';
import WriteTwo from '../pages/WriteTwo';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/test" element={<Test />} />
                <Route path="/wishlists" element={<WishLists />} />
                <Route path="/wishlists/:id" element={<Wish />} />
                <Route path="/write/:id" element={<WriteTwo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

