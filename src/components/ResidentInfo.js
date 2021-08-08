import { useState, useEffect } from "react";
import "../css/residentInfo.css";
const ResidentInfo = ({ dataResidents }) => {
  const [prevPage, setPrevPage] = useState(0);
  const [nextPage, setNextPage] = useState(10);
  const [dataPrint, setDataPrint] = useState([]);
  const [disableNextButton, setDisableNextButton] = useState(false);
  const [disablePrevButton, setDisablePrevButton] = useState(false);
  const handlePagination = (prev, next) => {
    return dataResidents.slice(prev, next);
  };
  useEffect(() => {
    setPrevPage(0);
    setNextPage(10);
    setDataPrint(handlePagination(prevPage, nextPage));
    if (nextPage === dataResidents.length) {
      setDisableNextButton(true);
    } else {
      setDisableNextButton(false);
      setDisablePrevButton(false);
    }
    if (dataResidents.length <= 10) {
      setDisableNextButton(true);
      setDisablePrevButton(true);
    }
    setDisablePrevButton(true);
  }, [dataResidents]);
  useEffect(() => {
    if (nextPage === dataResidents.length) {
      setDisableNextButton(true);
      setDisablePrevButton(false);
    } else {
      setDisableNextButton(false);
      setDisablePrevButton(false);
    }
    if (dataResidents.length <= 10) {
      setDisableNextButton(true);
      setDisablePrevButton(true);
    }
  }, [nextPage]);
  useEffect(() => {
    if (prevPage === 0) {
      setDisablePrevButton(true);
    }
    setDataPrint(handlePagination(prevPage, nextPage));
  }, [prevPage]);
  const handleNextPage = async () => {
    if (dataResidents.slice(nextPage, dataResidents.length).length > 10) {
      setPrevPage(nextPage);
      setNextPage(nextPage + 10);
    } else {
      setPrevPage(nextPage);
      setNextPage(dataResidents.length);
      setDataPrint(handlePagination(prevPage, nextPage));
    }
  };
  const handlePrevPage = () => {
    if (prevPage - 10 >= 0) {
      setNextPage(prevPage);
      setPrevPage(prevPage - 10);
      setDataPrint(handlePagination(prevPage, nextPage));
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: ".3rem",
        }}
      >
        <button
          onClick={handlePrevPage}
          disabled={disablePrevButton}
          style={{
            height: "1.5rem",
            background: "#3876B3",
            border: "none",
            fontWeight: "bold",
            margin: ".3rem",
            padding: ".2rem",
            width: "5rem",
          }}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={disableNextButton}
          style={{
            height: "1.5rem",
            background: "#3876B3",
            border: "none",
            fontWeight: "bold",
            padding: ".2rem",
            width: "5rem",
          }}
        >
          Next
        </button>
      </div>
      {dataPrint[0] !== "No hay residentes" ? (
        <div className="resident-container">
          {dataPrint.map((res) => (
            <div className="resident-card" key={res.id}>
              <img src={res.image} alt={res.name} />
              <div className="resident-card-info">
                <h3>{res.name}</h3>
                <p>
                  <span>Status: </span>
                  {res.status}
                </p>
                <p>
                  <span>Origin: </span>
                  {res.origin.name}
                </p>
                <p>
                  <span>Specie: </span>
                  {res.species}
                </p>
                <p>
                  <span>Gender: </span>
                  {res.gender}
                </p>
                <p>
                  <span>Episodes: </span> {res.episode.length}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "2rem",
          }}
        >
          <h3>{dataPrint[0]}</h3>
        </div>
      )}
    </>
  );
};
export default ResidentInfo;
