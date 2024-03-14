// http://23.97.221.154:8080/ses/api/measurements/getConsumptionBySensorWeekly/1/2
export async function fetchWeeklyConsumption(waterId, lightId) {
    try {
        const response = await fetch(`http://23.97.221.154:8080/ses/api/measurements/getConsumptionBySensorWeekly/${waterId}/${lightId}`);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

// http://23.97.221.154:8080/ses/api/measurements/getConsumptionBySensorMonthly/1/2
export async function fetchMonthlyConsumption(waterId, lightId) {
    try {
        const response = await fetch(`http://23.97.221.154:8080/ses/api/measurements/getConsumptionBySensorMonthly/${waterId}/${lightId}`);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

export const tiempoEsperaParaVolverASolicitarDatos = 900000;