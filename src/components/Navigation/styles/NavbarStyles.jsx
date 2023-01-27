
import { makeStyles } from "@material-ui/core";
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

const toolbarXl = {
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: "2rem",
};
const textItemsNavbar = {
  fontWeight: "bold",
  color: `${globalStyles.textInNavbar}`,
};

const listItemsStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: `${globalStyles.backgroundColorSearch}`,
    "&:hover": {
      backgroundColor: `${globalStyles.backgroundColorSearchHover}`,
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: `${globalStyles.textInNavbar}`
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export { buttonNavStyles, textItemsNavbar,toolbarXl,listItemsStyles };
