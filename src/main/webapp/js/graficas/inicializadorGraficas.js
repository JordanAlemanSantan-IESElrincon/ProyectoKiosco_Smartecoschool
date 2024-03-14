import {tiempoEsperaParaVolverASolicitarDatos} from "../api-service.js";

import {implementarGraficaSemanalEnergy} from "./graficaSemanalEnergy.js";
import {implementarGraficaSemanalAgua} from "./graficaSemanalAgua.js";

import {implementarGraficaMensualEnergy} from "./graficaMensualEnergy.js";
import {implementarGraficaMensualAgua} from "./graficaMensualAgua.js";

import {implementarGraficaRetoEnergy} from "./graficaRetoEnergy.js";
import {implementarGraficaRetoAgua} from "./graficaRetoAgua.js";

// Inicializar
const initCharts = async () => {
    await implementarGraficaSemanalEnergy();
    await implementarGraficaSemanalAgua();
    await implementarGraficaMensualEnergy();
    await implementarGraficaMensualAgua();
    await implementarGraficaRetoEnergy();
    await implementarGraficaRetoAgua();
};

await initCharts();

setInterval(async () => await initCharts(), tiempoEsperaParaVolverASolicitarDatos);