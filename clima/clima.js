const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=98fb03b18709dd7b73ee1e5e4f258f2b&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}