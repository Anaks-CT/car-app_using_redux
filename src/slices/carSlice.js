import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name : 'carlist',
    initialState : {
        searchTerm : '',
        data : []
    },
    reducers : {
        changeTerm(state, action){
            state.searchTerm = action.payload
        },
        addCar(state, action){
            state.data.push({
                name : action.payload.name,
                cost : action.payload.cost,
                id : nanoid()
            })
        },
        removeCar(state, action){
            const updated = state.data.filter((item) => item.id !== action.payload)
            state.data = updated
        }
    }
})

export const {changeTerm, addCar, removeCar} = carSlice.actions
export const carSliceReducer = carSlice.reducer