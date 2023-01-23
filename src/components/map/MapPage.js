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

  const getHome = async () => {
    try {
      const data = await get("/api/homes/");
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const goToMyGome = async () => {
    try {
      const { data } = await get(`/api/homes/${dataOfUser.uId}`);
      const allDataHomes = await getHome();
      const geometry = data.geometry;

      setDataHome({
        currentLocation: { lat: geometry[0], lng: geometry[1] },
        zoom: 16,
        data: allDataHomes.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const registerHome = async (dataHome) => {
    try {
      const registerData = await post("/api/homes/new/home", dataHome);
      return registerData;
    } catch (error) {
      return error;
    }
  };

  return (
    <MapView
      registerHome={registerHome}
      dataHome={dataHome}
      dataOfUser={dataOfUser}
      setDataHome={setDataHome}
      getHome={getHome}
      changeUserNew={changeUserNew}
      goToMyGome={goToMyGome}
    />
  );
};
