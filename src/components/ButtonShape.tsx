import React from "react";

function helloWorld(area) {
  console.log(area);
  console.log('You\'ve clicked the right part')
}

const ButtonShape = () => {
  return (
    <section id="container">
      <img src="https://i.stack.imgur.com/4KmlR.jpg" alt="" useMap="#Map" />
      <map name="Map" id="Map">
        <area
          alt=""
          title=""
          onClick={helloWorld}
          shape="poly"
          coords="66,282,73,284,79,303,78,320,49,328,48,317"
        />
        [...]
      </map>

      <span id="info">&lt;== click here</span>
    </section>
  );
};

export default ButtonShape;
