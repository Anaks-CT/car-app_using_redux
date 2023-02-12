import React from "react";
import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, item) => (acc = item.cost + acc), 0)
  );
  return <div className="car-value">Total Cost : ${totalCost}</div>;
}

export default CarValue;
