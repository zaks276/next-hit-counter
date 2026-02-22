'use client'
import React, { useState} from "react";

function Censored({ children }) {
  const [censored, setCensored] = useState(true);
  return (
    <button
      className={censored ? "censored" : ""}
      onClick={() => setCensored(!censored)}
    >
      {children}
    </button>
  );
}

export default Censored;
