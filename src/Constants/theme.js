import { MuiThemeProvider,  createTheme } from '@material-ui/core/styles';




const THEME = createTheme({
    typography: {
      "fontFamily": "\"MyCustomFont\"",
      "fontSize": 20,
      "lineHeight": 1.5,
      "letterSpacing": 0.32,
      fontWeightRegular: 600,
      useNextVariants: true,
      suppressDeprecationWarnings: true,
      h6: {
        "fontWeight": 600,
      },
    },
});

export default THEME;