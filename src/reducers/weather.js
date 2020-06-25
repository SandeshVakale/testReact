import {Types} from "../actions/weather";
const INITIAL_STATE = {
    items: []
}

export default function weather(state = INITIAL_STATE, action )
{
    console.log(action)
    switch (action.type) {
        case Types.GET_WEATHER_SUCCESS: {
            return {
                items: action.payload
            }
        }
        default: {
            return state
        }
    }
}
