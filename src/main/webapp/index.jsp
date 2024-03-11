<%-- 
    Document   : index
    Created on : 10 ene 2024, 12:31:43
    Author     : Jordan
--%>
<%@page contentType="text/html" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>JSP Page</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <link rel="stylesheet" href="css/animaciones.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/tamCharts.css">

    <!-- Include the ECharts file you just downloaded -->
    <script src="echarts/dist/echarts.js"></script>
</head>

<body>

<div id="main">
    <header class="container-fluid">
        <div class="row contenidoHeader">
            <div class="col-2 imagenHeader">
                <img src="img/iconSES.png" alt="Imagen de consumo de agua y luz" width="210" height="170" class="logo-img-header">
            </div>
            <div class="col-8 contenidoHeaderTitulo">
                <h1>Estadísticas de Consumo de Agua y Luz</h1>
            </div>
            <div class="col-2 imagenHeader">
                <img src="img/iconElRincon.png" alt="Imagen del logo IES_ElRincón" width="170" height="170">
            </div>
        </div>

        <div class="contenidoHeaderVistas">
            <div class="contenidoHeaderEnergy">
                <img src="img/vectorEnergy.svg" alt="Imagen energía">
                <h2>Energía</h2>
            </div>
            <div class="contenidoHeaderAgua">
                <img src="img/vectorAgua.svg" alt="Imagen energía">
                <h2>Agua</h2>
            </div>
        </div>
    </header>

    <main class="contenidoMain" id="contenidoMain">
        <section id="contenidoVistaGeneral" class="row contenidoVistaGeneral">
            <div class="col-6 contenidoVistaGeneralEnergy">
                <div class="row">
                    <%-- Cambio animación del texto de consumo diario actual a mensual--%>
                    <div class="contenidoConsumoEnergy" id="contenidoConsumoEnergyActual">
                        <h3>Consumo actual</h3>
                        <span id="cantidadConsumoEnergyActual">50 kWh</span>
                    </div>
                    <div class="contenidoGraficaConsumoEnergy" id="graficaDiarioEnergy"></div>
                </div>
            </div>

            <div class="col-6 contenidoVistaGeneralAgua">
                <div class="row">
                    <div class="contenidoConsumoAgua" id="contenidoConsumoAguaActual">
                        <h3>Consumo actual</h3>
                        <span id="cantidadConsumoAguaActual">3.375 L</span>
                    </div>
                    <div class="contenidoGraficaConsumoAgua" id="graficaDiarioAgua"></div>
                </div>
            </div>
        </section>

        <section id="vistaMensual" class="row contenidoVistaGeneral">
            <div class="col-6 contenidoVistaGeneralEnergy">
                <div class="row">
                    <%-- Cambio animación del texto de consumo diario actual a mensual--%>
                    <div class="contenidoConsumoEnergy" id="contenidoConsumoEnergyMensual">
                        <h3>Consumo actual</h3>
                        <span id="cantidadConsumoEnergyMensual">50 kWh</span>
                    </div>
                    <div class="contenidoGraficaConsumoEnergy" id="graficaMensualEnergy"></div>
                </div>
            </div>

            <div class="col-6 contenidoVistaGeneralAgua">
                <div class="row">
                    <div class="contenidoConsumoAgua" id="contenidoConsumoAguaMensual">
                        <h3>Consumo actual</h3>
                        <span id="cantidadConsumoAguaMensual">3.375 L</span>
                    </div>
                    <div class="contenidoGraficaConsumoAgua" id="graficaMensualAgua"></div>
                </div>
            </div>
        </section>
    </main>

<%--        <footer class="contenidoFooter"></footer>--%>
</div>

<!-- Prepare a DOM with a defined width and height for ECharts -->
<%--<div id="semanal" style="width: 1000px;height:400px;"></div>--%>
<%--<div id="mensual" style="width: 600px;height:600px;"></div>--%>

<script src="js/controlVistasGráficas.js"></script>
<script src="js/semanal.js"></script>
<script src="js/mensual.js"></script>
<script src="js/diarioAgua.js"></script>
<script src="js/diarioEnergy.js"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"></script>
</body>

</html>