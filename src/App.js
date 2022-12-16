import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Card/Card";
import Filters from "./components/Filter/Filter";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./components/Pages/Episodes";
import Location from "./components/Pages/Location";
import CardDeatils from "./components/Card/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<CardDeatils/>}/>
        
        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/episodes/:id" element={<CardDeatils/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/location/:id" element={<CardDeatils/>}/>
      </Routes>
    </Router>
  );
}
const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [species, setSpecies] = useState("");
  let [gender, setGender] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (

    <div className="App">

<h1 className="text-center mb-4">Personajes</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters
            setSpecies={setSpecies}
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber} />

          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber} />
    </div>
  );
}


export default App;