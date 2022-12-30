import React from 'react';
/* import { useState, createContext } from "react"; */

export const UserContext = React.createContext();

export const UserMethods = ({ children }) => {
  const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const dataUser = () => {
    const data = JSON.parse(localStorage.getItem("user"));
    return data;
  };

  const [location, setLocation] = React.useState()


  const changeUserNew = (isNew) => {
    const userData =  JSON.parse(localStorage.getItem("user"));
    const changeUser = {
      ...userData,
      isNew: isNew,
    };
    localStorage.setItem("user", JSON.stringify(changeUser));
  };

  return (
    <UserContext.Provider value={{ saveUser, dataUser, changeUserNew, location, setLocation }}>
      {children}
    </UserContext.Provider>
  );
};
