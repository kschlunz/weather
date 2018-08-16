import { FETCH_WEATHER } from '../actions/api'

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_WEATHER:

      return{
        ...state,
        terms: action.payload
      }

          }

    default:
      return state;

  }
