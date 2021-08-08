import { useEffect, useState } from "react";
import LocationInfo from "./LocationInfo";
const LocationContainer = ({ db, nameLocationToSearch }) => {
  const [dataLocationSelected, setDataLocationSelected] = useState();
  useEffect(() => {
    if (nameLocationToSearch) {
      let location = db.filter((loc) => loc.name === nameLocationToSearch);
      setDataLocationSelected(location);
    }
  }, [nameLocationToSearch]);

  return (
    <>
      {dataLocationSelected && (
        <LocationInfo dataLocationSelected={dataLocationSelected} />
      )}
    </>
  );
};
export default LocationContainer;
