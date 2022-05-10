import axios from 'axios';
import {useEffect,useState} from 'react';


//Establecemos nuetros estados para obtener los valores climaticos. 
const useDateWeather = () => {
    const [name,setName] = useState("")
    const [country,setCountry] = useState("")
    const [weatherInfo,setWeatherInfo]= useState("")
    const [wind,setWind] = useState()
    const [humidity,setHumidty] = useState()
    const [tempData,setTempData] = useState(0)


    //usamos el useEffect para controlar la actualizacion de nuestro componente, y evitar bucles infinitos. 
    useEffect(() =>{
        //establecemos la funcion que nos permitira obtener los valores mediante nuestra posicion.
        const success = pos =>{
            const latitude = pos.coords.latitude;
            const longitude = pos.coords.longitude;
            //usamos el metodo .get para obtener los datos de la API climatica.
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}4&appid=3fc3061e44a8b6326fabb150a236d776`)
                //usamos el then para recibir los valores de el clima.
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
        //usamos el metodo geolocation para obtener la posicion de nuestro dispositivo. 
        navigator.geolocation.getCurrentPosition(success);
        
    
    }, [])
    
    //enviamos mediante props la informacion obtenida de la funcion a nuestro componente Principal Weather
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