/* import L from "leaflet";

 const VenueLocationIcon = L.icon({
  iconUrl: require(""),
  iconRetinaUrl: require("../../assets/venue_location_icon.svg"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});

export default VenueLocationIcon */

import L from "leaflet";

export const icon = L.icon({
  iconUrl: require("../../components/img/localiti-icon.png"),
  iconRetinaUrl: require("../../components/img/localiti-icon.png"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});

export const iconSpecial = L.icon({
  iconUrl: require("../../components/img/locality-icon-especial.png"),
  iconRetinaUrl: require("../../components/img/locality-icon-especial.png"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [30, 30],
  className: "leaflet-venue-icon",
});