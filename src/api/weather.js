import axios from 'axios'


export const getWeather = (unit) => {
    console.log('unit', unit)
    return axios.get(`./weather?q=paris&units=${unit.unit}&appid=0869db5c93d0c502b6515d6b609b500e`)
}
