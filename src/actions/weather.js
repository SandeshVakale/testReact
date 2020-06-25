export const Types = {
    GET_WEATHER_REQUEST: 'weather/get_weather_request',
    GET_WEATHER_SUCCESS: 'weather/get_weather_success'
}

export const getWeatherRequest = (unit) => ({
    type: Types.GET_WEATHER_REQUEST,
    unit
})

export const getWeatherSuccess = ({items}) => ({
    type: Types.GET_WEATHER_SUCCESS,
    payload: {
        items
    }
})
