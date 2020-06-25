import React from 'react';
import {connect} from 'react-redux'
import {getWeatherRequest} from "../actions/weather";
import './styles.css'
import moment from "moment";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'kelvins'
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }
    componentDidMount() {
        const {getWeatherRequest} = this.props
        getWeatherRequest(this.state.selectedOption)
    }

    handleOptionChange (changeEvent) {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    handleFormSubmit (formSubmitEvent) {
        formSubmitEvent.preventDefault();
        const {getWeatherRequest} = this.props
        getWeatherRequest(this.state.selectedOption)
        console.log('You have selected:', this.state.selectedOption);
    }

    render() {/**/

    const {weather} = this.props
    if (weather.items.length === 0) {
        return (
            <div className="weather">
                <span>  Loading ...  </span>
            </div>
        );
    } else {
        return (
            <div>
                <div className="weather">
                    <h1>Paris, France</h1>
                </div>
                <div className='weather'>
                    <h5>Choose unit type</h5>
                    <form onSubmit={this.handleFormSubmit}>
                        <div>
                            <label>
                                <input type="radio" value="kelvins" checked={this.state.selectedOption === 'kelvins'} onChange={this.handleOptionChange} />
                                Kelvins
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" value="metric" checked={this.state.selectedOption === 'metric'} onChange={this.handleOptionChange}/>
                                Celsius
                            </label>
                        </div>
                        <div >
                            <label>
                                <input type="radio" value="imperial" checked={this.state.selectedOption === 'imperial'} onChange={this.handleOptionChange}/>
                                Fahrenheit
                            </label>
                        </div>
                        <button className="weather" type="submit">Save</button>
                    </form>
                </div>
                <div className="weather">
                    <span>  Date       :  { moment().format('MMMM Do YYYY, hh:mm') }  </span>
                    <span>  Temperature:  { weather.items.items.main.temp } </span>
                    <span>  Description:  { weather.items.items.weather[0].description }</span>
                    <span>  Wind speed :  { weather.items.items.wind.speed } at { weather.items.items.wind.deg }</span>
                </div>
                <div className='weather'>
                    <span>  Sunrise    :  { moment(weather.items.items.sys.sunrise).format('hh:mm:ss') }</span>
                    <span>  Sunset     :  { moment(weather.items.items.sys.sunset).format('hh:mm:ss') }</span>
                </div>
            </div>
        )
    }
    }
}

export default connect(({weather}) => ({weather}), {
    getWeatherRequest
})(App);
