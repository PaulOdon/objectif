import React from "react";

const ExperienceCardImage = (props: any) => (
  <div>
    <img src={props.src} alt={props.alt} style={experienceCardImageStyles} />
  </div>
);

const experienceCardImageStyles = {
  boxShadow: "5px 4px 22px rgba(0, 0, 0, 0.15)",
  borderRadius: "20px",
  height: "200px",
  width: "200px",
};

export default ExperienceCardImage;
