import ResidentContainer from "./ResidentContainer";
const LocationInfo = ({ dataLocationSelected }) => {
  let { name, type, dimension, residents } = dataLocationSelected[0];

  return (
    <>
      <div className="location-info">
        <p style={{ padding: ".2rem" }}>
          <span style={{ fontWeight: "bold" }}>City Name:</span> {name}
        </p>
        <p style={{ borderLeft: "1px solid #eee", padding: ".2rem" }}>
          <span style={{ fontWeight: "bold" }}>Type: </span>
          {type}
        </p>
        <p style={{ borderLeft: "1px solid #eee", padding: ".2rem" }}>
          <span style={{ fontWeight: "bold" }}>Dimension:</span> {dimension}
        </p>
        <p style={{ borderLeft: "1px solid #eee", padding: ".2rem" }}>
          <span style={{ fontWeight: "bold" }}>Residents:</span>{" "}
          {residents.length}
        </p>
      </div>
      <ResidentContainer urlsResidents={residents} />
    </>
  );
};
export default LocationInfo;
