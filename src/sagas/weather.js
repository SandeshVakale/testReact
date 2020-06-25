import {takeEvery, call, fork, put} from 'redux-saga/effects'
import * as actions from '../actions/weather'
import * as api from '../api/weather'

function* getWeather(unit) {
    try {
        const result = yield call(api.getWeather, unit)
        yield put(actions.getWeatherSuccess({
            items: result.data
        }))
    }
    catch (e) {
        console.log('e', e)
    }
}


function* watchGetWeatherRequest() {
yield takeEvery(actions.Types.GET_WEATHER_REQUEST, getWeather);
}


const WeatherSagas = [
    fork(watchGetWeatherRequest)
]

export default WeatherSagas
