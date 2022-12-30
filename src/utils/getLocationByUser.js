const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export const getLocationByUser = (setDataHome, dataHome) => {
  const location = navigator.geolocation;

  if (!location) {
    return console.log("Ubicacion Desactivada");
  }

  location.getCurrentPosition(
    function (position) {
      setDataHome({
        ...dataHome,
        currentLocation: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    },
    function (error) {
      console.log(error);
    },
    options
  );
};
