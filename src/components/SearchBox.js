import { useState, useEffect } from "react";
import LocationContainer from "./LocationContainer";
import "../css/searchBox.css";
const SearchBox = ({ db }) => {
  const [searchLocation, setSearchLocation] = useState();
  const [nameLocationToSearch, setNameLocationToSearch] = useState();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setNameLocationToSearch(searchLocation);
    setSearchLocation();
  };
  const handleChangeSelect = (e) => {
    setSearchLocation(e.target.value);
  };
  useEffect(() => {
    if (db.length !== 0) {
      let randomCityIndex = Math.round(Math.random() * db.length - 1);
      let city = db.filter((ele, index) => {
        if (index === randomCityIndex) {
          return ele.name;
        }
      });
      setNameLocationToSearch(city[0].name);
    }
  }, [db]);
  return (
    <>
      <div className="container-form">
        <form onSubmit={handleSubmitForm} style={{ background: "red" }}>
          <input
            type="text"
            defaultValue={searchLocation}
            style={{
              background: "white",
              outline: "none",
              border: "1px solid #B3B9B3",
              borderRadius: ".3rem",
              display: "inline-block",
              height: "1.5rem",
              margin: ".3rem",
            }}
          ></input>
          <button
            type="submit"
            style={{
              height: "1.5rem",
              background: "#38B338",
              border: "none",
              borderRadius: ".3rem",
              fontWeight: "bold",
            }}
          >
            Search
          </button>
          <br />
          {db.length !== 0 && (
            <select
              defaultValue="Selected City"
              onChange={handleChangeSelect}
              style={{
                border: "1px solid #B3B9B3",
                borderRadius: ".3rem",
                height: "1.5rem",
                marginBottom: ".3rem",
                marginLeft: ".3rem",
                outline: "none",
              }}
            >
              <option disabled>Selected City</option>
              {db.map((loc) => (
                <option key={loc.id}>{loc.name}</option>
              ))}
            </select>
          )}
        </form>
      </div>
      <div className="location-container">
        <LocationContainer
          db={db}
          nameLocationToSearch={nameLocationToSearch}
        />
      </div>
    </>
  );
};
export default SearchBox;
