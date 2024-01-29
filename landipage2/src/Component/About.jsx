import React from "react";
import "C:/Users/SANTHOSH/React/landipage2/src/Style/About.css";
import Image2 from "C:/Users/SANTHOSH/React/landipage2/src/assets/Wimages/Image2.jpg";
import Image3 from "C:/Users/SANTHOSH/React/landipage2/src/assets/Wimages/Image3.jpg";
import Image4 from "C:/Users/SANTHOSH/React/landipage2/src/assets/Wimages/Image4.jpg";
import Image5 from "C:/Users/SANTHOSH/React/landipage2/src/assets/Wimages/Image5.jpg";
function About() {
  return (
    <div className="container">
      <h1>About </h1>

      <div className="row">
        <div className="col ">
          <img src={Image2} alt="Tajmahal" className="about-image" />
        </div>

        <div className="col ">
          <img src={Image3} alt="Pramid" className="about-image" />
        </div>

        <div className="col ">
          <img src={Image4} alt="china wall" className="about-image" />
        </div>
        <div className="col ">
          <img src={Image5} alt="china wall" className="about-image" />
        </div>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi fugiat
        iure nisi repellat! Eveniet quasi autem provident quia, sunt in!
        Ratione, sequi officia facilis eveniet veritatis consectetur fugiat
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi fugiat
        iure nisi repellat! Eveniet quasi autem provident quia, sunt in!
        Ratione, sequi officia facilis eveniet veritatis consectetur fugiat
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi fugiat
        iure nisi repellat! Eveniet quasi autem provident quia, sunt in!
        Ratione, sequi officia facilis eveniet veritatis consectetur fugiat
      </p>
    </div>
  );
}
export default About;
