const axios = require('axios');

const getLugar = async (direccion) => {
    const dirCode = encodeURI(direccion)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dirCode}`,

        headers: { 'x-rapidapi-key': '080db859f4mshfd820267a8380d2p1a907bjsn3364e8c6ea97' }
    });
    const resp = await instance.get();
 
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }
    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        dir: dir,
        lat,
        lng
    }
}



module.exports = {
    getLugar
}
