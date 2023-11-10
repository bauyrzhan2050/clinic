import React, { useState } from "react";
import "../css/callBlock.css";
function CallBlock() {
  const [links, setLinks] = useState(false);
  const hideAndOpen = () => {
    setLinks(!links);
    console.log(links);
  };

  return (
    <div className="callBlock" onClick={hideAndOpen}>
      <div className="envelope">
        <i class="fa-solid fa-envelope"></i>
      </div>

      {links && (
        <div className="insideLinks transition">
          <a href="https://wa.me/7479651219">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a href="telegram.me/@groupname">
            <i class="fa-brands fa-telegram"></i>
          </a>
          <a href="tel:+77777777">
            <i class="fa-solid fa-phone fa-rotate-270"></i>
          </a>
        </div>
      )}
    </div>
  );
}
export default CallBlock;
