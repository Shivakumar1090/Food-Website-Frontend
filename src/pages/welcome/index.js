import c1 from "../../Assets/Courasel_images/c1.png";
import c2 from "../../Assets/Courasel_images/c2.png";
import c3 from "../../Assets/Courasel_images/c3.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Products from "../products";

const Welcome = () => {
  const classes = useStyles();
  var items = [
    {
      imageName: c1,
    },
    {
      imageName: c2,
    },
    {
      imageName: c3,
    },
  ];
  return (
    <div className={classes.container}>
      <Box marginTop="6%">
        <Box
          style={{
            width: "75%",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Carousel>
            {items.map((item) => (
              <img src={item.imageName} className={classes.cimg} alt=""></img>
            ))}
          </Carousel>
        </Box>
        {/* <Products /> */}
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
    height: "70vh",
    borderRadius: "30px",
    "@media only screen and (max-width: 720px)": {
      height: "30vh",
    },
  },
});

export default Welcome;
