import React, { useState, useEffect, useRef } from "react";
import { LayersControl, Map, TileLayer } from "react-leaflet";
import Markers from "./VenueMarkers";
import "leaflet/dist/leaflet.css";
import { toast, Toaster } from "react-hot-toast";
import { UserIntroduction } from "../user/UserIntroduction";
import { validationHomesByUser } from "./validation/validationHome";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import { geosearch } from "esri-leaflet-geocoder";
import HouseIcon from "@material-ui/icons/House";
import { buttonMyHome, mapContainer } from "./mapStyles/MapStyles";
import { UserContext } from "../Context/useContext";
import { useContext } from "react";
import { HouseContext } from "../Context/houseContext";

const MapView = ({
  setDataHome,
  dataHome,
  changeUserNew,
  goToMyHome
}) => {
  const { registerHome, getHome } = useContext(HouseContext)
  const { dataUser } = useContext(UserContext);
  const [deleteHome, setDeleteHome] = useState(false);
  const dataOfUser = dataUser();

  const mapRef = useRef();

  const control = geosearch();

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if (!map) return;

    control.addTo(map);
    control.on("results", handleOnSearchResuts);
    control.off("results", handleOnSearchResuts);
  }, []);

  const handleOnSearchResuts = (data) => {
    console.log("Searchlts", data);
  };

  const getAllHomes = async (currentLocation) => {
    const { data } = await getHome();

    setDataHome({ ...dataHome, data: data });
    if (currentLocation) {
      const { lat, lng } = currentLocation;
      setDataHome({
        ...dataHome,
        data: data,
        currentLocation: { lat: lat, lng: lng },
      });
    }
  };

  //verifico si el usuario isNew lo envio a la introduccion sino traigo todas las casas
  useEffect(() => {
    if (dataOfUser?.isNew) {
      UserIntroduction(dataOfUser);
    } else {
      getAllHomes();
    }
  }, []);

  //Cuando elimino una "casa" verifico que el usuario no quede sin ella
  useEffect(() => {
    if (deleteHome) {
      const homeOfUser = dataHome.data?.some(
        (home) => home.name === dataOfUser.name
      );

      if (!homeOfUser) {
        changeUserNew(true);
        window.location.reload(true);
      }
      setDeleteHome(false);
    }
  }, [deleteHome]);

  

  const registerNewHome = async (e) => {
    const { lat, lng } = e.latlng;
    const newVenue = {
      name: dataOfUser.name,
      latitude: lat,
      longitude: lng,
      isSpecial: false,
      userId: dataOfUser.id,
    };

    const validationHome = validationHomesByUser(dataHome, newVenue);

    if (validationHome.length > 1) {
      return toast.error("El usuario puede tener solo 2 casas");
    }

    const registerHomeUser = await registerHome(newVenue);

    if (!registerHomeUser.ok) {
      return;
    }

    changeUserNew(false);
    toast.dismiss();
    await getAllHomes(e.latlng);
  };

  const { BaseLayer } = LayersControl;

  return (
    <>
      <Toaster position="top-center" />

     {dataHome && <Map
        center={dataHome.currentLocation}
        style={mapContainer}
        zoom={dataHome.zoom}
        ondblclick={registerNewHome}
        ref={mapRef}
      >
        <Markers
          getAllHomes={getAllHomes}
          dataHome={dataHome}
          setDeleteHome={setDeleteHome}
          style={{ backgroundColor: "red" }}
        />

        <LayersControl>
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </BaseLayer>
          <BaseLayer name="NASA Gibs Blue Marble">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'"
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            />
          </BaseLayer>
        </LayersControl>
        <div onClick={goToMyHome}>
          <HouseIcon style={buttonMyHome}></HouseIcon>
        </div>
      </Map>
     }
      
    </>
  );
};

export default MapView;
