import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main.Page";
import Detail from "./pages/Detail.Page";
import Popular from "./pages/Popular.Page";
import TopRated from "./pages/TopRated.Page";
import User from "./pages/User.Page";

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:movieId" element={<Detail/>} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/topRated" element={<TopRated />} />
            <Route path="/user" element={<User />} />
        </Routes>
    )
}