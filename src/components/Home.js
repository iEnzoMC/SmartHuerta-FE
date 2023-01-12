import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import '../App.css'
import LoginUi from "./Login/LoginUi";
// import $ from 'jquery';

const Home = () => {

  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });
  // console.log('home')
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {

        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }

  /*  const registerLocation = () => {
     await axios.post('http://localhost:4000/api/auth/new', {name, password})
     .then(result =>{
         console.log(result)
     })
     .catch(e => {console.log(e)})
   } */

  useEffect(() => {
    getLocation()
  }, []);


  {/* <Link
        to={{
          pathname: "/map",
          // state: {
          //   hello: 'world'
          // }
          state,
        }}
      >
        Añadir Ubicación 
      </Link> */}

  /* http://localhost:4000/api/mesas/get/table */

  // $(".email-signup").hide();
  // $("#signup-box-link").click(function () {
  //   $(".email-login").fadeOut(100);
  //   $(".email-signup").delay(100).fadeIn(100);
  //   $("#login-box-link").removeClass("active");
  //   $("#signup-box-link").addClass("active");
  // });
  // $("#login-box-link").click(function () {
  //   $(".email-login").delay(100).fadeIn(100);;
  //   $(".email-signup").fadeOut(100);
  //   $("#login-box-link").addClass("active");
  //   $("#signup-box-link").removeClass("active");
  // });

  return (

    <LoginUi />
  );
}

export default Home;
