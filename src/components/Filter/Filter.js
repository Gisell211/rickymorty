import React from "react";
import Species from "../Category/Species";
import Gender from "../Category/Gender";
import Status from "../Category/Status";


const Filter = ({
  setStatus,
  setPageNumber,
  setGender,
  setSpecies,
}) => {
  
  let clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filtros</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Borrar Filtros
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          setStatus={setStatus}
          setPageNumber={setPageNumber}
        />
        <Species
          setPageNumber={setPageNumber}
          setSpecies={setSpecies}
        />
        <Gender
          setGender={setGender}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
};

export default Filter;