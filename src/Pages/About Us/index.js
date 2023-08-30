import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import about from '../../Utillis/images/about.png';
import './style.css';

function AboutUs() {
  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <div>
        <img src={about} alt="" className="sw" />
        <h1 className="about">About Us</h1>
        <h3 className="h3">
          LOCATION! Priced To SELL! GREAT OPPORTUNITY TO MAKE YOUR OWN IN VERY DESIRABLE
          AREA. TILED THROUGHOUT. COVERED PATIO TERRACE, FRUIT TREES AND FENCED. SEPARATE
          DETACHED STORAGE. CONVENIENTLY LOCATED NEAR THE MIAMI AIRPORT, MARLINS BALL PARK,
          BRICKELL, WYNWOOD AND DOWNTOWN. NEW SOCCER STADIUM PLANNED. ALL OFFERS MUST INCLUDE
          A PRE-APPROVAL AND DU.
        </h3>
      </div>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default AboutUs;
