
export const validationHomesByUser = (dataHome, newVenue) => {

 const homes = dataHome.data.filter(
    (venue) => venue.name === newVenue.name
  );

 
  return homes

}