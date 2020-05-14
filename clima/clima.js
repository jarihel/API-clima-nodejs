const axios = require('axios');

const getClima = async (lat,lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c6fe4fe979e5916212a04c5c40d7b430&units=metric`)

    return resp.data.main;
}
   



module.exports = {
getClima
}