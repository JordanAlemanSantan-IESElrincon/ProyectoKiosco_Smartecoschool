export function fetchWeeklyConsumption(sensorId) {
    return fetch(`api/measurements/getConsumptionBySensorWeekly/${sensorId}`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}