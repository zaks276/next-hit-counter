import React from "react";

import { readFile, writeFile } from "../helpers/file-helpers";
import Censored from "../components/Censored/Censored";
import HitCounter from "../components/HitCounter/HitCounter";

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number{" "}
       <Censored>
        <HitCounter/>
       </Censored>
      </p>
    </main>
  );
}

export default Home;
