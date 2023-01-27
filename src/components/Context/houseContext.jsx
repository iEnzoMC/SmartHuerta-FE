import React from 'react';
import { useContext } from 'react';
import { HttpContext } from './httpContext';

export const HouseContext = React.createContext();



export const HouseMethods = ({ children }) => {

  const { post, get } = useContext(HttpContext);

    const registerHome = async (dataHome) => {
        try {
          const registerData = await post("/api/homes/new/home", dataHome);
          return registerData;
        } catch (error) {
          return error;
        }
      };

      const getHome = async () => {
        try {
          const data = await get("/api/homes/");
          return data;
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <HouseContext.Provider value={{ registerHome, getHome }}>
      {children}
    </HouseContext.Provider>
  );
};
