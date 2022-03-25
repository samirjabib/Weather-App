import axios from 'axios';
import {useEffect,useState} from 'react';

const useDateWeather = () => {
    const [name,setName] = useState("")
    const [country,setCountry] = useState("")
    const [weatherInfo,setWeatherInfo]= useState("")
    const [wind,setWind] = useState()
    const [humidity,setHumidty] = useState()
    const [tempData,setTempData] = useState(0)

    useEffect(() =>{
        const success = pos =>{
            const latitude = pos.coords.latitude;
            const longitude = pos.coords.longitude;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}4&appid=3fc3061e44a8b6326fabb150a236d776`)
            .then(res =>{
                console.log(res.data)
                setName(res.data.name)
                setName(res.data.name)
                setCountry(res.data.sys?.country)
                setWeatherInfo(res.data.weather[0].description)
                setWind(res.data.wind.speed)
                setHumidty(res.data.main.humidity)
                setTempData(res.data.main.temp)
            } ) 
            
        }
        navigator.geolocation.getCurrentPosition(success);
        
    
    }, [])

    
    

    
    return (
        {
            name,
            country,
            weatherInfo,
            wind,
            humidity,
            tempData: (tempData-273.15).toFixed()
        }
    );
};
export default useDateWeather;