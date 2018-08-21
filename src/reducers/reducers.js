import { FETCH_WEATHER, CURRENT_WEATHER, GET_TRAILS, GET_BEER } from '../actions/api'

const initialState = {
  forecastArray: [],
  currentArray: [],
  trailsArray: [],
  beerArray: []
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

        case GET_BEER:
          return{
            ...state,
            beerArray: action.payload
          }

      }

  return state;
  }
