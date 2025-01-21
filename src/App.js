import React, { useState } from "react";

function ToggleText() {
  const [isVisible, setisVisible] = useState(true);
  return (
    <div>
      {isVisible && <p> This is Toggle Text </p>}
      <button onClick={() => setisVisible(!isVisible)}> Toggle Text </button>
    </div>
  );
}
export default ToggleText;
