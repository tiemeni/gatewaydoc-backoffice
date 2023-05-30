import { createStyles } from "@mui/material";
import { Colors as colors } from "../../../Constants/colors";

const styles = createStyles({
  summary: {
    backgroundColor: colors.black,
    minHeight: 30,
    height: 35,
    maxHeight: 48,
    borderRadius: 5,
    color: colors.white,
    flexDirection: "row-reverse",
    gap: 5,
  },
  details: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  box: {
    display: "flex",
    alignItems: "center",
    gap: 3,
    width: "50vw",
    margin: 1,
  },
  label: {
    fontSize: 14,
    width: 130,
    textAlign: "end",
  },
  input: {
    fontSize: 16,
    color: "red",
  },
  btnChild: {
    display: "flex",
    justifyContent: "end",
  },
  expandDown: {
    color: colors.white,
    fontSize: "2rem",
  },
});

export default styles;
