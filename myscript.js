const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a996c123fdmsh83e7000628f518bp122b78jsn6039cfadf541',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
cityname.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then(response =>{
        console.log(response) 
        cloud_pct.innerHTML= response.cloud_pct
        feels_like.innerHTML= response.feels_like
        humidity.innerHTML=response.humidity
        humidity2.innerHTML=response.humidity
        max_temp.innerHTML= response.max_temp
        min_temp.innerHTML= response.min_temp
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML=response.sunset
        temp.innerHTML= response.temp
        temp2.innerHTML= response.temp
        wind_speed.innerHTML=response.wind_speed   
        wind_speed2.innerHTML=response.wind_speed   
        
    })
	.catch(err => console.error(err));
}

let a=document.getElementById("search")
a.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value) 
})
getWeather("surat")


// Vadodara Data


const vadodara=()=>{
    
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=vadodara', options)
        .then(response => response.json())
        .then(response =>{
            console.log(response) 
            cloud_pct3.innerHTML= response.cloud_pct
            feels_like3.innerHTML= response.feels_like
            humidity3.innerHTML=response.humidity
            max_temp3.innerHTML= response.max_temp
            min_temp3.innerHTML= response.min_temp
            sunrise3.innerHTML=response.sunrise
            sunset3.innerHTML=response.sunset
            temp3.innerHTML= response.temp
            wind_speed3.innerHTML=response.wind_speed    
            
        })
        .catch(err => console.error(err));
    }
    vadodara("vadodara")


//Mumbai Data


    const mumbai=()=>{
    
    
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
            .then(response => response.json())
            .then(response =>{
                console.log(response) 
                cloud_pct4.innerHTML= response.cloud_pct
                feels_like4.innerHTML= response.feels_like
                humidity4.innerHTML=response.humidity
                max_temp4.innerHTML= response.max_temp
                min_temp4.innerHTML= response.min_temp
                sunrise4.innerHTML=response.sunrise
                sunset4.innerHTML=response.sunset
                temp4.innerHTML= response.temp
                wind_speed4.innerHTML=response.wind_speed    
                
            })
            .catch(err => console.error(err));
        }
        mumbai("Mumbai")


//Kolkata Data


        const kolkata=()=>{
    
    
            fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
                .then(response => response.json())
                .then(response =>{
                    console.log(response) 
                    cloud_pct5.innerHTML= response.cloud_pct
                    feels_like5.innerHTML= response.feels_like
                    humidity5.innerHTML=response.humidity
                    max_temp5.innerHTML= response.max_temp
                    min_temp5.innerHTML= response.min_temp
                    sunrise5.innerHTML=response.sunrise
                    sunset5.innerHTML=response.sunset
                    temp5.innerHTML= response.temp
                    wind_speed5.innerHTML=response.wind_speed    
                    
                })
                .catch(err => console.error(err));
            }
            kolkata("kolkata")

//Delhi Data


            const delhi=()=>{
    
    
                fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
                    .then(response => response.json())
                    .then(response =>{
                        console.log(response) 
                        cloud_pct6.innerHTML= response.cloud_pct
                        feels_like6.innerHTML= response.feels_like
                        humidity6.innerHTML=response.humidity
                        max_temp6.innerHTML= response.max_temp
                        min_temp6.innerHTML= response.min_temp
                        sunrise6.innerHTML=response.sunrise
                        sunset6.innerHTML=response.sunset
                        temp6.innerHTML= response.temp
                        wind_speed6.innerHTML=response.wind_speed    
                        
                    })
                    .catch(err => console.error(err));
                }
                delhi("delhi")

//Chennai Data


                const chennai=()=>{
    
    
                    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', options)
                        .then(response => response.json())
                        .then(response =>{
                            console.log(response) 
                            cloud_pct7.innerHTML= response.cloud_pct
                            feels_like7.innerHTML= response.feels_like
                            humidity7.innerHTML=response.humidity
                            max_temp7.innerHTML= response.max_temp
                            min_temp7.innerHTML= response.min_temp
                            sunrise7.innerHTML=response.sunrise
                            sunset7.innerHTML=response.sunset
                            temp7.innerHTML= response.temp
                            wind_speed7.innerHTML=response.wind_speed    
                            
                        })
                        .catch(err => console.error(err));
                    }
                    chennai("chennai")