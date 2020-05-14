
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el  clima',
        demand: true
    }
}).argv
/*

lugar.getLugar(argv.direccion)
    .then(console.log);
//argv.direccion

let lat = -31.400000;
let lng = -64.190002;

clima.getClima(lat,lng)
    .then(console.log)
    .catch(console.log);
*/

const getInfo = async(direccion)=>{
    try {
        const dir = await lugar.getLugar(direccion);
        const temperatura = await clima.getClima(dir.lat, dir.lng);
        return `El clima de ${dir.dir} es de ${Math.round( temperatura.temp)}°C`;
    } catch (error) {
         return `No se pudo determinar el clima de ${direccion} `;
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
