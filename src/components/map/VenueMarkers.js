import React from "react";
import { Marker } from "react-leaflet";
import MarkerPopup from "../user/MarkerPopup";
import { Popup } from "react-leaflet";
import VenueLocationIcon, { icon, iconSpecial } from "../map/VenueLocationIcon";
import { useContext } from "react";
import { HttpContext } from "../Context/httpContext";
import { toast } from "react-hot-toast";
const VenueMarkers = (props) => {
  const { dataHome, getAllHomes, setDeleteHome } = props;
  const { put } = useContext(HttpContext);

  const deleteHome = async (dataTodelete) => {

    const dateleHome = await put(`/api/homes/delete/${dataTodelete.id}`);

    await getAllHomes();

    setDeleteHome(true)

    return dateleHome;
  };

  const markers = (dataHome.data ?? []).map((venue, i) => (
    <Marker
      key={i}
      position={venue.geometry}
      icon={venue.isSpecial ? iconSpecial : icon}
    >
      <MarkerPopup venue={venue} deleteHome={deleteHome} />
    </Marker>
  ))


  return <>{markers}</>;
};

export default VenueMarkers;
