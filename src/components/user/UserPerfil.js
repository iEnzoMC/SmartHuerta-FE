import { Avatar, Grid, Paper } from '@material-ui/core'
import React from 'react'
import "../../assets/tailwind.css";
import "../../assets/main.css";
import MenuIcon from "@material-ui/icons/Menu";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import imgLogo from "../../components/img/Logotipo_smart.png";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { containerUserData, userView } from './styles/userStyles';
import { FormView } from './FormView';
import { avatarFormStyle, avatarStyle } from './styles/popupStyles';
import { Carrousel } from './carrousel/Carrousel';


 const UserPerfil = () => {

  

  return (
   <body style={avatarFormStyle}> 
    <div style={{height: '100vh', width:'100vw'}}>

      <div style={{height: '95%', width: '100%'}}>
      <div className="md:hidden responsive">
        <img
          src={imgLogo}
          className="img-responsive"
          alt="logosdas"
        />
        <div
          className="cursor-pointer"
          /* hidden={openMenu}
          onClick={handleOpenMenu} */
        >
          <MenuIcon
            style={{
              position: "absolute",
              right: "0px",
              height: "3.5rem",
              width: "6rem",
              top: "31px",
            }}
          />
        </div>

        <div className="nave" /* hidden={closeMenu} */>
          <ul className="grid grid-cols-1 ">
            <Link style={{ textDecoration: "none", color: "#556cac" }} to="/home">
              <li className="text-left block p-4 border-b-2 border-indigo-100 cursor-pointer">
                inicio
              </li>
            </Link>
            <a
              className="cursor-pointer"
              style={{ color: "#556cac" }}
              /* onClick={scrollAbout} */
            >
              <li className="text-left block p-4 border-b-2 border-indigo-100 cursor-pointer">
                Nuestros Clientes
              </li>
            </a>
            <a
              className="cursor-pointer"
              style={{ color: "#556cac" }}
             /*  onClick={scrollToServices} */
            >
              <li className="text-left block p-4 border-b-2 border-indigo-100 cursor-pointer">
                Servicios
              </li>
            </a>
            <li className="text-left no-underline block text-white p-4 border-b-2 border-indigo-100 cursor-pointer">
              <Link
                style={{ textDecoration: "none", color: "#556cac", cursor: 'pointer'}}
                to="/form"
              >
                {" "}
                Contacto{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden sm:flex">
          <WhatsAppIcon
            /* onClick={handleWhattsapp} */
            className="bg-green-500 text-white"
            style={{
              cursor: "pointer",
              fontSize: "60px",
              position: "fixed",
              zIndex: "40",
              right: "25px",
              bottom: "44px",
              borderRadius: "50%",
            }}
          />
        </div>
        <div className="sm:flex hidden page-header">
          <img
            src={imgLogo}
            className="img-logo"
            alt="logos"
          />
          <ul>
          <Link style={{ textDecoration: "none", color: "#556cac", cursor: 'pointer' }} to="/">
            <li>     
                {" "}
                Inicio{" "}
            </li>
            </Link>
            <li>
              <a
                className="cursor-pointer"
                style={{ color: "#556cac" }}
                /* onClick={scrollAbout} */
              >
                Nuestros Clientes
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer"
                style={{ color: "#556cac" }}
                /* onClick={scrollToServices} */
              >
                Servicios
              </a>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#556cac", cursor: 'pointer' }}
                to="/form"
              >
                {" "}
                Contacto{" "}
              </Link>
            </li>
          </ul>
        </div>


      <Paper elevation={3} style={{height: '85%', width: '90%', margin: 'auto'}}> 
      
      <div style={containerUserData}>
      <div style={userView}>
        <h1 className='text-center mt-2' style={{fontSize: '30px'}}>Agregar Producto</h1>
          <div>
          <FormView/>
          </div>
      </div>
      <div style={userView}>
      <Carrousel/>
      </div>

      </div>
      </Paper>
      </div>

    </div>
    </body>

  )
  }


  export default UserPerfil
