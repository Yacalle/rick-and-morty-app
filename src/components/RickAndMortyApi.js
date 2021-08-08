import React from "react";
import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
const RickAndMortyApi = () => {
  const [db, setDb] = useState([]);
  useEffect(() => {
    const dataBase = [];
    const data = async (url) => {
      const datos = await fetch(url);
      const json = await datos.json();
      json.results.forEach((city) => {
        dataBase.push(city);
      });
      if (json.info.next) {
        data(json.info.next);
      }
      if (!json.info.next) {
        setDb(dataBase);
      }
    };
    data("https://rickandmortyapi.com/api/location");
  }, []);
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <SearchBox db={db} />
    </div>
  );
};

export default RickAndMortyApi;
