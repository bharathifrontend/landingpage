import React from "react";

import Image7 from "C:/Users/SANTHOSH/React/landipage2/src/assets/Wimages/Image7.jpg";
import Image8 from "C:/Users/SANTHOSH/React/landipage2/src/assets/Wimages/Image8.jpg";
// import Image9 from "C:/Users/SANTHOSH/React/landipage2/src/assets/Wimages/Iamge9.jpg";
// import Image10 from "C:/Users/SANTHOSH/React/landipage2/src/assets/Wimages/Image10.jpg";

function Wonder() {
  let imageStyle = { height: "100%", width: "100%" };
  return (
    <div className="container">
      <div className="row gy-2 ">
        <div className="col-6">
          <img src={Image7} alt="Tajmahal" style={imageStyle} />
          <div className="p-3 border bg-light">Tajmahal</div>
        </div>
        <div className="col-6">
          <img src={Image8} alt="Jeasus" style={imageStyle} />
          <div className="p-3 border bg-light">Pramid</div>
        </div>

        <div className="col-6">
          {/* <img src={Image9} alt="Great Wall" style={imageStyle} /> */}
          <div className="p-3 border bg-light">Pramid</div>
        </div>
        <div className="col-6">
          {/* <img src={Image10} alt="Paisa" style={imageStyle} /> */}
          <div className="p-3 border bg-light">China great wall</div>
        </div>
      </div>
    </div>
  );
}

export default Wonder;
