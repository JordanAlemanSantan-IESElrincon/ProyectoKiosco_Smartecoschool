// export function fetchWeeklyConsumption(waterId, lightId) {
//     return fetch(`http://23.97.221.154:8080/api-kiosco/api/measurements/getConsumptionBySensorWeekly/${waterId}/${lightId}`)
//         .then(response => response.json())
//         .catch(error => console.error('Error:', error));
// }
const express = require('express');
const app = express();

// http://23.97.221.154:8080/api-kiosco/api/measurements/getConsumptionBySensorWeekly/2/3
// http://23.97.221.154:8080/ses/api/measurements/getConsumptionBySensorWeekly/2/3
export async function fetchWeeklyConsumption(waterId, lightId) {
    try {
        const response = await fetch(`http://23.97.221.154:8080/ses/api/measurements/getConsumptionBySensorWeekly/${waterId}/${lightId}`);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

// http://23.97.221.154:8080/api-kiosco/api/measurements/getConsumptionBySensorMonthly/2/3
// http://23.97.221.154:8080/ses/api/measurements/getConsumptionBySensorMonthly/2/3
export async function fetchMonthlyConsumption(waterId, lightId) {
    try {
        const response = await fetch(`http://23.97.221.154:8080/ses/api/measurements/getConsumptionBySensorMonthly/${waterId}/${lightId}`);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

export const tiempoEsperaParaVolverASolicitarDatos = 5000;