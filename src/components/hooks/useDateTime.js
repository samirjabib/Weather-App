import {useEffect, useState} from 'react';


//codigo para hacer un reloj .
const useDateTime = () => {


    //hacemos un arreglo con los dias de la semana.
    let weekdays= [
        "Sunday",
        "Monday",
        "Thuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    //hacemos un arreglo con los meses del año.
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
        //usamos el useState para poder cambiar el estado del reloj a tiempo real.
        const [day,setDay] = useState("");
        const [month,setMonth] = useState("");
        const [hours,setHours] = useState (0);
        const [minutes,setMinutes] = useState(0);
        const [seconds, setSeconds] = useState(0);

        //funcion para obtener los datos segun la zona horaria.
    const getTime = () => {

        /* declaramos una variable con el objeto constructor date, ya que este nos retorna
         un objeto con los datos de la zona horaria dependiendo de nuestra ubicacion */
        let currentTime = new Date();

        //usamos el useState para asignar el estado a nuestras variables del reloj.
        setDay(currentTime.getDay());
        setMonth(currentTime.getMonth());
        setHours(currentTime.getHours());
        setMinutes(currentTime.getMinutes());
        setSeconds(currentTime.getSeconds());
    }

    //usamos el useEffect para controlar la actualizacion de nuestra funcion
    useEffect( () => {
        getTime();
        return (
            /*usamos la funcion setInterval para ejecutar de forma repitiva la actualizacion de nuestro
            reloj cada segundo.*/  
            setInterval( () =>{getTime()},1000)
        )
    })
    return (
        //retornamos las variables que vamos a usar en nuestro componente Weather mediante props.
        {
            day: weekdays[day],
            month:months[month],
            hours: hours < 10 ? `0${hours}` : hours,
            minutes: minutes < 10 ? `0${minutes}` : minutes,
            seconds: seconds < 10 ? `0${seconds}` : seconds,
        }
        
    );
};

export default useDateTime;