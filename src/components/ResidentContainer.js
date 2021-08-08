import { useState, useEffect } from "react";
import ResidentInfo from "./ResidentInfo";
import axios from "axios";
const ResidentContainer = ({ urlsResidents }) => {
  const [dataResidents, setDataResidents] = useState();
  useEffect(() => {
    if (urlsResidents.length !== 0) {
      let allResidents = [];
      const funcRequest = async (url) => {
        let request = await axios({
          method: "GET",
          url,
        });
        if (request) {
          allResidents = [...allResidents, request.data];
        }
        if (allResidents.length === urlsResidents.length) {
          setDataResidents(allResidents);
        }
      };
      urlsResidents.forEach((urlRes) => funcRequest(urlRes));
    } else {
      setDataResidents(["No hay residentes"]);
    }
  }, [urlsResidents]);

  return (
    <div>{dataResidents && <ResidentInfo dataResidents={dataResidents} />}</div>
  );
};
export default ResidentContainer;
