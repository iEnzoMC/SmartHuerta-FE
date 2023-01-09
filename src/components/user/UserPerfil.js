import { Avatar, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "../../assets/tailwind.css";
import "../../assets/main.css";
import MenuIcon from "@material-ui/icons/Menu";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import imgLogo from "../../components/img/Logotipo_smart.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { avatarFormStyle, avatarStyle } from "./styles/popupStyles";
import PersonIcon from "@material-ui/icons/Person";

const UserPerfil = () => {
  const [img, setImg] = useState("");

  return (
    <body style={avatarFormStyle}>
      <div style={{ height: "100vh", width: "100vw" }}>
        <div style={{ height: "95%", width: "100%" }}>
          <div className="md:hidden responsive">
            <img src={imgLogo} className="img-responsive" alt="logosdas" />
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
                <Link
                  style={{ textDecoration: "none", color: "#556cac" }}
                  to="/home"
                >
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
                    style={{
                      textDecoration: "none",
                      color: "#556cac",
                      cursor: "pointer",
                    }}
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
            <img src={imgLogo} className="img-logo" alt="logos" />
            <ul>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#556cac",
                  cursor: "pointer",
                }}
                to="/"
              >
                <li> Inicio </li>
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
                  style={{
                    textDecoration: "none",
                    color: "#556cac",
                    cursor: "pointer",
                  }}
                  to="/form"
                >
                  {" "}
                  Contacto{" "}
                </Link>
              </li>
            </ul>
          </div>

          <Paper
            elevation={0}
            style={{ height: "20%", width: "80%", margin: "auto" }}
          >
            <div style={{display: 'flex', justifyContent: 'space-evenly', paddingBottom: '0.5rem', paddingTop: '0.5rem'}}>

            <div>
              <Avatar
                src={img}
                /*  onClick={() => handleClickOpen()} */
                style={{ height: "6rem", width: "6rem" }}
              >
                <PersonIcon style={{ height: 120, width: 120 }} />
              </Avatar>
            </div>

            <div style={{width: '26%'}}>
              <Typography variant="h5" style={{fontWeight: '800', fontSize: '15px', marginBottom: '10px'}}>
                Pedro Pablo
              </Typography>
              <Typography variant="span" style={{fontWeight: '600', fontSize: '13px', marginBottom: '3px'}}>
                Profesor de Programacion y apasionado por Smart Huerta
              </Typography>

              <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '15px', paddingBottom: '5px'}}>
              <Typography variant="span" style={{fontWeight: '800',  fontSize: '12px'}}>
                productos: 30
              </Typography>
              <Typography variant="span" style={{fontWeight: '800',  fontSize: '12px'}}>
                SmartPoint: 200
              </Typography>
              <Typography variant="span" style={{fontWeight: '800', fontSize: '12px'}}>
                Trueques Realizados: 25
              </Typography>

              </div>
            </div>

            </div>
            
          </Paper>
        </div>
      </div>
    </body>
  );
};

export default UserPerfil;
