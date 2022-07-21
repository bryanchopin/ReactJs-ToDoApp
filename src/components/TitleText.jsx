import React from "react";
import '../styles/TitleText.css';

function TitleText(props) {
  return (
    <div className={props.classNamee}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default TitleText;