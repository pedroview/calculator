import React from "react";

export default ({ authur, portfolio }) => (
  <div className="developer">
    Made with{" "}
    <span role="img" aria-label="Heart">
      💗
    </span>{" "}
    by <a href={portfolio}>{authur}</a>
  </div>
);
