import React from 'react';
import Logo from "./WesternOochLogo.png"

function HomepageImage() {
  return (
    <img src={Logo} style={{position: "absolute", width: "400px",
    height: "400px",
    left: "940px",
    top: "120px"}} alt='Logo' />
  );
}

export default HomepageImage;