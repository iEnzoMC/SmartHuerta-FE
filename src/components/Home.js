import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import '../App.css'
import LoguinUi from "./Loguin/LoguinUi";
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

    <LoguinUi />
    // <>
    // <h1>homePage</h1>
    // </>
  //   <div class="login-box" style={{ marginTop: '9rem' }}>
  //     <div class="lb-header">
  //       <a href="#" class="active" id="login-box-link">Login</a>
  //       <a href="#" id="signup-box-link">Sign Up</a>
  //     </div>
  //     <form class="email-login">
  //       <div class="u-form-group">
  //         <input type="text" placeholder="Username" />
  //       </div>
  //       <div class="u-form-group">
  //         <input type="password" placeholder="Password" />
  //       </div>
  //       <div class="u-form-group">
  //         <button>
  //           <Link
  //             to={{
  //               pathname: "/map",
  //               // state: {
  //               //   hello: 'world'
  //               // }
  //               state,
  //             }}
  //           >
  //             Sign Up
  //           </Link>
  //         </button>
  //       </div>
  //       <div class="u-form-group">
  //         <a href="#" class="forgot-password">Forgot password?</a>
  //       </div>
  //     </form>
  //     <form class="email-signup">
  //       <div class="u-form-group">
  //         <input type="text" placeholder="Email"
  //         />
  //       </div>
  //       <div class="u-form-group">
  //         <input type="password" placeholder="Password" />
  //       </div>
  //       <div class="u-form-group">
  //         <input type="password" placeholder="Confirm Password" />
  //       </div>
  //       <div class="u-form-group">
  //         <button> <Link
  //           to={{
  //             pathname: "/map",
  //             // state: {
  //             //   hello: 'world'
  //             // }
  //             state,
  //           }}
  //         >
  //           Sign Up
  //         </Link></button>
  //       </div>
  //     </form>
  //   </div>
  );
}

export default Home;
