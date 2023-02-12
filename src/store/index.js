import { configureStore } from "@reduxjs/toolkit";
import { addCar, carSliceReducer, changeTerm, removeCar } from "../slices/carSlice";
import { changeCost, changeName, formSliceReducer } from "../slices/formSlice";

const store = configureStore({
    reducer : {
        cars : carSliceReducer,
        form : formSliceReducer
    }
})

export {store,addCar, changeCost, changeName, changeTerm, removeCar}
