import { createStyles } from "@mui/material";
import { Colors as colors } from "../../Constants/colors";

const styles = createStyles({
  container: {
    marginTop: 60,
  },
  titleBox: {
    height: 60,
    backgroundColor: colors.gainsboro,
    display: "flex",
    alignItems: "center",
    padding: "0 2rem",
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
  },
});

export default styles;
