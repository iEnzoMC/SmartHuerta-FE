import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { HttpContext } from "../Context/httpContext";
import MapView from "./MapView";
import { UserContext } from "../Context/useContext";
import { getLocationByUser } from "../../utils/getLocationByUser";

export const MapPage = () => {
  const { post, get } = useContext(HttpContext);
  const { dataUser, changeUserNew } = useContext(UserContext);
  const [dataHome, setDataHome] = useState({
    currentLocation: { lat: 0, lng: 0 },
    zoom: 16,
    data: [],
  });

  const dataOfUser = dataUser();

  useEffect(() => {
    if (dataHome.currentLocation.lat === 0) {
      getLocationByUser(setDataHome, dataHome);
    }
  });

 

  const goToMyHome = async () => {
    try {
  
      const { data } = await get(`/api/homes/${dataOfUser.id}`);
      const geometry = data.geometry;

      setDataHome({
        ...dataHome,
        currentLocation: { lat: 0, lng: 0 },
        zoom: 16,
      });


      setTimeout(() => {
        setDataHome({
          ...dataHome,
          currentLocation: { lat: geometry[0], lng: geometry[1] },
          zoom: 16,
        });
      }, 3000);
      
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <MapView
      dataHome={dataHome}
      setDataHome={setDataHome}
      changeUserNew={changeUserNew}
      goToMyHome={goToMyHome}
    />
  );
};
