//setup data layer
import React, { createContext, useContext, useReducer } from "react";

//this is de dataLayer
export const StateContext = createContext();

//provider that raps the app inside and give acess the dataLayer
export const StateProvider = ({ reducer, initialState, children}) =>(
    <StateContext.Provider value ={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// the useStateValue is the part that we use in the component so we can update the DataLayer/StateProvider
export const useStateValue = () => useContext(StateContext);