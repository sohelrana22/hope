import React, { useEffect } from "react";

const Home = () => {
  //Dynamic Title
  useEffect(() => {
    document.title = "Home | Hopewell Hospital";
  }, []);

  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
};

export default Home;
