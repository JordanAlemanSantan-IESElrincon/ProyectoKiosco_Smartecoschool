export function fetchWeeklyConsumption(waterId, lightId) {
    return fetch(`http://23.97.221.154:8080/api-kiosco/api/measurements/getConsumptionBySensorWeekly/${waterId}/${lightId}`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}