import { createStyles } from "@mui/material";

const styles = createStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  label: {
    width: 250,
    textAlign: "end",
    fontSize: 12,
    fontWeight: 600
  },
  input: {
    width: '40%'
  },
  helperText: {
    color: 'red',
    marginLeft: 1.8
  }
});

export default styles;
