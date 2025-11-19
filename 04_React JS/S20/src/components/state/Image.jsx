import { useState } from "react";
import "./Image.css";
function Image() {
  const [state, setState] = useState(
    "https://media.sketchfab.com/models/540ff21ac0f54a038df6f634c7cce726/thumbnails/c7aff9789ba54201b3e850a06a262ead/715945dc7bd24448ad681a9b311cda69.jpeg"
  );

  const updateToNode = () => {
    setState(
      "https://innovationyourself.com/wp-content/uploads/2020/08/nodejs-logo.png"
    );
  };

  const updateToReact = () => {
    setState(
      "https://media.sketchfab.com/models/540ff21ac0f54a038df6f634c7cce726/thumbnails/c7aff9789ba54201b3e850a06a262ead/715945dc7bd24448ad681a9b311cda69.jpeg"
    );
  };

  return (
    <div className="image-container">
      <img src={state} width={500} height={300} />
      <br />
      <br />
      <button onClick={updateToReact}>React JS</button>
      <button onClick={updateToNode}>Node JS</button>
    </div>
  );
}

export default Image;
