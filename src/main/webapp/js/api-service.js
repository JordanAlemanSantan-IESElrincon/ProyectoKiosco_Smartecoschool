// export function fetchWeeklyConsumption(waterId, lightId) {
//     return fetch(`http://23.97.221.154:8080/api-kiosco/api/measurements/getConsumptionBySensorWeekly/${waterId}/${lightId}`)
//         .then(response => response.json())
//         .catch(error => console.error('Error:', error));
// }
const express = require('express');
const app = express();

export async function fetchWeeklyConsumption(waterId, lightId) {
    try {
        const response = await fetch(`http://23.97.221.154:8080/api-kiosco/api/measurements/getConsumptionBySensorWeekly/${waterId}/${lightId}`);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}