import React from "react";

export default ({ authur, github }) => (
  <div className="developer">
    Made with{" "}
    <span role="img" aria-label="Heart">
      💗
    </span>{" "}
    by <a href={github}>{authur}</a>
  </div>
);
