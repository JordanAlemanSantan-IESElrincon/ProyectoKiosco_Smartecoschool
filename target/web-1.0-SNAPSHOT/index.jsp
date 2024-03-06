<%-- 
    Document   : index
    Created on : 10 ene 2024, 12:31:43
    Author     : Jordan
--%>

<%@page import="java.util.ArrayList" %>
<%@page import="Dates.Student" %>
<%@page import="Dates.StudentManagement" %>
<%@page contentType="text/html" pageEncoding="UTF-8" %>


<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>JSP Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
            integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
            crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/styles.css">


    <!-- Include the ECharts file you just downloaded -->
    <script src="echarts/dist/echarts.js"></script>
</head>

<body>

<%--<div class="main-container">--%>
<%--    <h1>¡Hola, Mundo!</h1>--%>
<%--    <p></p>--%>

    <div class="container">
        <div class="row">
            <div id="diario" class="col-8" style="width: 1000px;height:400px;"></div>
            <div class="col-4" style="height:400px;">
                <div class="col-6 bg-primary" height:400px;></div>
                <div class="col-6 bg-warning" height:400px;></div>
            </div>
        </div>
    </div>
<%--<div class="container">--%>
<%--    <div class="row">--%>
<%--        <div class="col">col</div>--%>
<%--        <div class="col">col</div>--%>
<%--        <div class="col">col</div>--%>
<%--        <div class="col">col</div>--%>
<%--    </div>--%>
<%--    <div class="row">--%>
<%--        <div class="col-8">col-8</div>--%>
<%--        <div class="col-4">col-4</div>--%>
<%--    </div>--%>
<%--</div>--%>

<%--</div>--%>
<!-- Prepare a DOM with a defined width and height for ECharts -->

<%--<div id="semanal" style="width: 1000px;height:400px;"></div>--%>
<%--<div id="mensual" style="width: 600px;height:600px;"></div>--%>

<script src="js/semanal.js"></script>
<script src="js/mensual.js"></script>
<script src="js/diario.js"></script>
</body>

</html>