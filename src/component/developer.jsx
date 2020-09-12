import React from "react";

export default ({ authur, github }) => (
  <div id="author" className="author">
    <p>
      Made with{" "}
      <span role="img" aria-label="Heart">
        💗
      </span>{" "}
      by
    </p>
    <a href={github} target="_blank" rel="noopener noreferrer">
      {authur}
    </a>
  </div>
);
