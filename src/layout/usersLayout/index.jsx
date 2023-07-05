import React from "react";
import { Grid, Typography } from "@mui/material"
import styles from './style'

const UsersLayout = ({children, title}) => {
  return (
    <Grid style={styles.container}>
      <Grid item xs={12} style={styles.titleBox}>
        <Typography sx={styles.title}>{title}</Typography>
      </Grid>
        
      {children}
    </Grid>
  );
};

export default UsersLayout;
