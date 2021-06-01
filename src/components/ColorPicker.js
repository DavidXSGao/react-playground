import React, { useState } from "react";
import { ChromePicker } from "react-color";

// https://casesandberg.github.io/react-color/
function ColorPicker() {
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <>
      <button onClick={() => setShowColorPicker((prevState) => !prevState)}>
        {showColorPicker ? "Close color picker" : "Open color picker"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}
      <div>You picked {color}</div>
    </>
  );
}

export default ColorPicker;
