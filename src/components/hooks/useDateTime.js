import {useEffect, useState} from 'react';

const useDateTime = () => {
    let weekdays= [
        "Sunday",
        "Monday",
        "Thuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
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
        const [day,setDay] = useState("");
        const [month,setMonth] = useState("");
        const [hours,setHours] = useState (0);
        const [minutes,setMinutes] = useState(0);
        const [seconds, setSeconds] = useState(0);
    const getTime = () => {
        let currentTime = new Date();
        setDay(currentTime.getDay());
        setMonth(currentTime.getMonth());
        setHours(currentTime.getHours());
        setMinutes(currentTime.getMinutes());
        setSeconds(currentTime.getSeconds());
    }
    useEffect( () => {
        getTime();
        return (
            setInterval( () =>{getTime()},1000)
        )
    })
    return (
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