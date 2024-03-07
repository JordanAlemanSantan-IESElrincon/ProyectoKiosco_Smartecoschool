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
    <header class="container-fluid p-0">
        <div class="contenidoHeader">
            <img src="img/iconSES.png" alt="Imagen de consumo de agua y luz" class="logo-img-header">
            <div class="contenidoHeaderTitulo">
                <h1>Estadísticas de consumo de agua y luz</h1>
            </div>
        </div>

        <div class="contenidoHeaderVistas">
            <div class="contenidoHeaderEnergy">
                <img src="img/vectorEnergia.svg" alt="Imagen energía">
                <h2>Energía</h2>
            </div>
            <div class="contenidoHeaderAgua">
                <img src="img/vectorAgua.svg" alt="Imagen energía">
                <h2>Agua</h2>
            </div>
        </div>
    </header>

    <main class="contenido-main" id="contenido-main">
<%--        <h1 class="tituloPrincipalVista" id="tituloPrincipalVista">--%>
<%--            <span id="textoTituloPrincipalVista"></span>--%>
<%--        </h1>--%>
        <div class="container-fluid" id="vistaGeneral">
            <div class="row">
                <div id="diario" class="col-8 diarioChart"></div>
            </div>
        </div>

        <div class="container-fluid" id="vistaMensual">
            <div class="row">
                <div id="mensual" class="col-8 mensualChart"></div>
            </div>
        </div>
    </main>
</div>

<!-- Prepare a DOM with a defined width and height for ECharts -->
<%--<div id="semanal" style="width: 1000px;height:400px;"></div>--%>
<%--<div id="mensual" style="width: 600px;height:600px;"></div>--%>

<script src="js/controlVistasGráficas.js"></script>
<script src="js/semanal.js"></script>
<script src="js/mensual.js"></script>
<script src="js/diario.js"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"></script>
</body>

</html>