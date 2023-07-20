import React from "react";
import cimg from "../assets/images/covid.png";
import "../styles/covid.css";

const Covid = () => {
  return (
    <div className=" drug">
      <div>
        <img className="covid" src={cimg} alt="" />
      </div>
      <div className="vass">
        <h3>COVID-19 VACCINE ADMINISTRATION</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Dictum massa feugiat feugiat
          mauris ipsum risus. Vulputate elit vel dui fames auctor ultrices. Quis
          pellentesque amet massa sed purus adipiscing. Ornare faucibus sed id
          scelerisque odio habitant urna in nibh. Gravida nulla elit arcu
          scelerisque. Viverra lectus ullamcorper duis sed leo habitasse. Ac
          venenatis eget lacinia netus eros amet nunc. Vitae blandit nunc velit
          pretium et vitae morbi consequat. Id mi amet dui non leo tellus nunc
          pulvinar. Tortor in justo a in egestas proin ipsum. Lectus ut lobortis{" "}
              </p>
              <button style={{ backgroundColor: 'white', color: '#1E3673'}} className="btn">Register Now</button>
      </div>
    </div>
  );
};

export default Covid;
