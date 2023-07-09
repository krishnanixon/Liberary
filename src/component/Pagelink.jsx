import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Books from './Books';
import AllBooks from './AllBooks';
import AddBooks from './AddBooks';

const Pagelink = ({ data, setData }) => {
    return (
        <div className="pt-5">
            <Routes>
                <Route exact path={"*"} element={<div className="mt-5">Error</div>} />
                <Route exact path={"/"} element={<Home data={data} setData={setData} />} />
                <Route exact path={"/book/:id"} element={<Books data={data} setData={setData} />} />
                <Route exact path={"/all-books"} element={<AllBooks data={data} setData={setData} />} />
                <Route exact path={"/add-books"} element={<AddBooks data={data} setData={setData} />} />
            </Routes>
        </div >)
};

export default Pagelink;
