import React, { useEffect, useState } from "react";
import ManageProductDetails from "./ManageProductDetails";

const ManageProducts = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/service`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        console.log(data);
      });
  }, [service]);
  return (
    <div>
      <h1 className="text-4xl mx-20 font-bold text-center my-9">Manage Products</h1>
      <div className="grid grid-cols-2 w-11/12 gap-36 mx-auto">
        {service.map((services) => (
          <ManageProductDetails services={services}></ManageProductDetails>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
