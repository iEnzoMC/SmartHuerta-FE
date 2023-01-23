import globalStyles from "../../GlobalStyles/globalStyles";

const buttonNavStyles = {
  my: 2,
  color: "inherit",
  display: "block",
  backgroundColor: `${globalStyles.backgroundGreenColor}`,
  "&:hover": {
    backgroundColor: `${globalStyles.backgroundGreenColor}`,
    boxShadow: `5px 5px 5px ${globalStyles.shadowGreenColor}`,
  },
  paddingX: "1rem",
  marginX: "0.2rem",
  borderRadius: "5rem",
};

const textItemsNavbar = {
  fontWeight: "bold",
  color: `${globalStyles.textInNavbar}`,
};

export { buttonNavStyles, textItemsNavbar};
