import React from "react";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  useEffect(async () => {
    const res = await axios.get("/data");
    console.log(res.data);
  }, []);
  return <div>App</div>;
};

export default App;
