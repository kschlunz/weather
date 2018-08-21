import { FETCH_WEATHER, CURRENT_WEATHER, GET_TRAILS } from '../actions/api'

const initialState = {
  forecastArray: [],
  currentArray: [],
  trailsArray: []
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

        case GET_TRAILS:
          return{
            ...state,
            trailsArray: action.payload
          }

      }

  return state;
  }
