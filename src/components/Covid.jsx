import React from "react";
import cimg from "../assets/images/covid.png";
import "../styles/covid.css";
import cimg2 from "../assets/images/covid 2.png";

const Covid = () => {
  return (
    <div className=" drug">
      <div>
        <img className="covid" src={cimg} alt="" />
        <img src={cimg2} className="covid2" alt="" />
      </div>
      <div className="vass">
        <h3>COVID-19 VACCINE ADMINISTRATION</h3>
        <p className="dolor">
          Lorem ipsum dolor sit amet consectetur. Dictum massa feugiat feugiat
          mauris ipsum risus. Vulputate elit vel dui fames auctor ultrices. Quis
          pellentesque amet massa sed purus adipiscing. Ornare faucibus sed id
          scelerisque odio habitant urna in nibh. Gravida nulla elit arcu
          scelerisque. Viverra lectus ullamcorper duis sed leo habitasse. Ac
          venenatis eget lacinia netus eros amet nunc. Vitae blandit nunc velit
          pretium et vitae morbi consequat. Id mi amet dui non leo tellus nunc
          pulvinar. Tortor in justo a in egestas proin ipsum. Lectus ut lobortis{" "}
        </p>
        <p className="ipsum">
          Lorem ipsum dolor sit amet consectetur. Dictum massa feugiat feugiat
          mauris ipsum risus. Vulputate elit vel dui fames auctor ultrices. Quis
          pellentesque amet massa sed purus adipiscing. Ornare faucibus sed id
          scelerisque odio habitant urna in nibh. Gravida nulla elit arcu
          scelerisque. Viverra lectus ullamcorper duis sed leo habitasse. Ac
          venenatis eget lacinia netus eros amet nunc. Vitae blandit nunc velit
          pretium et vitae morbi consequat. Id mi amet dui non leo tellus nunc
          pulvinar. Tortor in justo a in egestas proin ipsum. Lectus ut lobortis
          quam egestas consequat et aliquet ipsum vel. Risus eu pharetra cras
          gravida. Nunc in eget semper maecenas ligula amet et. Mattis
          ullamcorper amet at metus. Diam pretium pulvinar mattis rutrum nunc
          risus. Ut ipsum duis egestas non. Dictum nunc sodales nisi senectus
          adipiscing feugiat. Sed arcu pellentesque urna dolor ultrices
          condimentum risus. Interdum morbi mauris in a morbi felis tincidunt.
          Aenean enim sed pellentesque arcu. Lorem posuere elit est in interdum
          tempus.
        </p>
        <button
          style={{ backgroundColor: "white", color: "#1E3673" }}
          className="btn"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Covid;
