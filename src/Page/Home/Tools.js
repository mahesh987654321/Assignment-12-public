import React, { useEffect, useState } from "react";
import ToolsDetails from "./ToolsDetails";

const Tools = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl mx-20 font-bold text-center">Tools</h1>
      <div className="grid grid-cols-3 w-11/12 gap-10 mx-auto">
        {service.slice(-6).map((services) => (
          <ToolsDetails services={services}></ToolsDetails>
        ))}
      </div>
    </div>
  );
};

export default Tools;
