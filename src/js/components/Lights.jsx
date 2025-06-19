import React from "react";
import {useState} from 'react'
import {useEffect} from "react"


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Lights = () => {
	const [ selectedColor, setSelectedColor ] = useState("yellow");
	
	useEffect(() => {
    const colors = ["red", "yellow", "green"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setSelectedColor(colors[index]);
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="text-center base">
      <div className="container"></div>
      <div
        className={"redlight" + (selectedColor === "red" ? " rglow" : "")}
      ></div>
      <div
        className={"yellowlight" + (selectedColor === "yellow" ? " yglow" : "")}
      ></div>
      <div
        className={"greenlight" + (selectedColor === "green" ? " gglow" : "")}
      ></div>
    </div>
  );
};


export default Lights;