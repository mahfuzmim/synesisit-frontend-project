import "./App.css";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleCard from "./components/SingleCard";
import Header from "./components/Header";

function App() {
  const [searchedValue, setSearchedValue] = useState("");

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Header setSearchedValue={setSearchedValue} />}
          ></Route>
        </Routes>

        <div className="mt-[6rem]">
          <Routes>
            <Route path="/" element={<Cards searchedValue={searchedValue} />} />
            <Route path="/post/:id" element={<SingleCard />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
