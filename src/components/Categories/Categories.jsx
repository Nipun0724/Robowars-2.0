import React from "react";
import Robot1 from "./Robot1";
import Robot2 from "./Robot2";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <div className="robot1">
        <Robot1 asset={"Asset 1.gltf"} title={"5kg"} />
      </div>
      <div className="robot2">
        <Robot2 asset={"Asset 1.gltf"} title={"10kg"} />
      </div>
    </div>
  );
};

export default Categories;
