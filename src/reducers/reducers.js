import { FETCH_WEATHER } from '../actions/api'

export default function(state = [], action){
  console.log("action recieved", action.payload)
  switch(action.type){
      case FETCH_WEATHER:
        return [action.payload, ...state ]
      }
  return state;
  }
