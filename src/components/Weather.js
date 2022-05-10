
import { useState } from 'react';
import useDateTime from './hooks/useDateTime';
import useDateWeather from './hooks/useDateWeather';

const Weather = () => {

    //Logic for API Weather.
    const{
        name,
        country,
        weatherInfo,
        wind,
        humidity,
        tempData,
    } = useDateWeather();

    //Logic for Date
    const {day,
        month,
        hours,
        minutes,
        seconds,
        } = useDateTime()

        // Logic for button interactive
        const [isCelcius, setIsCelcius] = useState();
        const [temp, setTemp] = useState();

        const tempFahrenheit = (tempData * 9/5) + 32
        const convertUnit = () => {
            let value = 0;
            if(isCelcius) {
                value = tempData
                setIsCelcius(false)
            }else {
                value= tempFahrenheit
                setIsCelcius(true)
            }
            setTemp(value)
        }
        

        
        
    
    return (
        <div className='app-clouds'>
            <section className='weather-card'>
                <section className='card'>
                    <main className='main-card'>    
                        <section className='main-card-location'>
                            <span>
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </span>
                            <p>{name}, {country} </p>
                        </section>
                        <section className='main-card-info'>
                            <section className='card-main-footer'>

                                <section className='main-card-date'>
                                    <h2 className='card-hour'>{hours}:{minutes}:{seconds}</h2>
                                    <p className='card-date'>{day} {month}</p>
                                </section>
                            </section>
                        </section>
                    </main>
                    {/* <div className='card-separator'>
                    </div> */}
                    <aside className='card-aside'>
                        <section className='card-aside-weather'>
                            <h2 className='card-aside-description'>{weatherInfo}</h2>
                            <div className='card-aside-weather-icon'>
                                <img src='http://openweathermap.org/img/wn/04d@4x.png' alt='img-description'></img>
                            </div>
                        </section>
                        <section className='card-aside-info'>
                            <div className='card-aside-temperature'>
                                <span><i className="fas fa-temperature-high"></i></span>
                            <p>
                                {temp}
                                {isCelcius ? "°C" : "°F"}
                            </p>
                            </div>
                            <div className='card-aside-humidity'>
                                <span><i className="fa-solid fa-water"></i></span>
                                <p>{humidity} %</p>
                            </div>
                            <div className='card-aside-wind'>
                                <span><i className="fa-solid fa-wind"></i></span>
                                <p>{wind} m/s</p>
                            </div>
                        </section>
                        <section className='card-aside-buttons'>
                    <button className='button-text' onClick={convertUnit}>Change unit</button>
                        </section>
                    </aside>
                </section>
            </section>
        </div>
    );
    
};

export default Weather;