import React from "react";
import "C:/Users/SANTHOSH/React/landipage2/src/Style/Home.css";
import Image1 from "C:/Users/SANTHOSH/React/landipage2/src/assets/Wimages/Image1.jpg";

function Home() {
  const imageStyle = {
    width: "100%",
    margin: "0px",
    padding: "0px",
    height: "100vh",
  };
  return (
    <div className="create-header">
      <div className="image-container">
        <img
          src={Image1}
          alt="world wonder"
          className="wonder Images"
          style={imageStyle}
        />
      </div>
    </div>
  );
}
export default Home;
