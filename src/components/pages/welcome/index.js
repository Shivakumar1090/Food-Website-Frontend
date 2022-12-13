import image from "./images/c1.png";
import sw1 from "./images/c2.png";
import sw3 from "./images/c3.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import ProductCard from "../../util/Card";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const Welcome = () => {
  const classes = useStyles();
  var items = [
    {
      nam1: image,
    },
    {
      nam1: sw1,
    },
    {
      nam1: sw3,
    },
  ];
  return (
    <div className={classes.container}>
      <Box marginTop="6%">
        <Box
          style={{
            width: "92%",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Carousel>
            {items.map((item) => (
              <img src={item.nam1} className={classes.cimg} alt=""></img>
            ))}
          </Carousel>
        </Box>
        {/* <ProductCard /> */}
      </Box>
    </div>
  );
};

const useStyles = makeStyles({
  RightBox: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  cimg: {
    objectFit: "cover",
    width: "100%",
    height: "80vh",
    borderRadius: '30px',
    "@media only screen and (max-width: 720px)": {
      height: "30vh",
    },
  },
});

export default Welcome;
