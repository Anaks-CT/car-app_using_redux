import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const {cars, name} = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars =  data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const name = form.name
    return {
      cars : filteredCars,
      name : name
    }
  });
  const handleCarDelete = (id) => {
    dispatch(removeCar(id));
  };
  const renderedCars = cars.map((item) => {
    const bold = name && item.name.toLowerCase().includes(name)
    return (
      <div key={item.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {item.name} - ${item.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(item.id)}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {renderedCars} <hr />
    </div>
  );
}

export default CarList;
