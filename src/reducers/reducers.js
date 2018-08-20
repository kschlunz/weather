import { FETCH_WEATHER, CURRENT_WEATHER } from '../actions/api'

const initialState = {
  forecastArray: [],
  currentArray: []
}

export default function(state = initialState, action){

  switch(action.type){
      case FETCH_WEATHER:

        return {
          ...state,
          forecastArray: action.payload
        }
      case CURRENT_WEATHER:

        return {
          ...state,
          currentArray: action.payload


        }

      }
    
  return state;
  }
