import React from "react";
import "./css/Section.css"; // Create a CSS file for styling

const Section = () => {
  return (
    <div>
      <div className="flex-i">
        {/* first image */}
        <div className="responsive-section ">
          <div className="text-content">
            <h1>Cozy Sophistication</h1>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>
            <button className="shop-button">Shop Furniture</button>
          </div>
          <div className="image-content">
            <img
              src="https://static.wixstatic.com/media/ea26fd_e3f9fefad6b445a68e393cabe81f156f~mv2.jpg/v1/crop/x_571,y_1166,w_3260,h_4580/fill/w_400,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Soft%20Couch.jpg" // Replace with your furniture image URL
              alt="Blue furniture"
              className="main-image"
            />
          </div>
        </div>
        {/* second image */}
        <div>
          <div className="responsive-card ">
            <img
              src="https://static.wixstatic.com/media/ea26fd_b7296294ef234ffa9c573860a78b9a10~mv2.jpg/v1/crop/x_1294,y_0,w_2621,h_3473/fill/w_400,h_530,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Woman%20Interior.jpg" // Replace with your actual image URL
              alt="Person in a stylish outfit"
              className="card-image"
            />
            <h2>House Visit: Jane Levi's Californian Oasis</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>
            <button className="read-button">Read Story</button>
          </div>
        </div>
        {/* end */}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
     
    </div>
  );
};

export default Section;
