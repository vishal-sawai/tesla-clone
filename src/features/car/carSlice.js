import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["Vehicles", "Energy", "Charging", "Discover", "Shop"],
    vehicles: ["Model S", "Model 3", "Model X", "Model Y"],
    vehiclesData: ["Inventory", "Used Cars", "Demo Drive", "Trade-in", "Compare", "Fleet", "Cybertruck", "Semi", "Roadster"],
}


const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})


export const selectCars = state => state.car.cars
export const selectVehiclesName = state => state.car.vehicles;
export const selectVData = state => state.car.vehiclesData;
export default carSlice.reducer;