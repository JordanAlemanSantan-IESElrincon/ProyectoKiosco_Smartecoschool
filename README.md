<h1 align="center"># 🌱Smart Eco School🌱</h1>
<h4 align="center">:construction: Proyecto en curso :construction:</h4>

<h1 align="center"><img src="![isologo](https://github.com/JordanAlemanSantan-IESElrincon/ProyectoKiosco_Smartecoschool/assets/56256350/c5ae028c-34d4-4131-806b-99b8280ac45c)
" width="100"></h1>

## Índice
1. [Información general](#info-general)
2. [Tecnologías](#tecnologias)
3. [Instalación](#instalacion)
4. [Instalación en Intellij Community](#instalacion-intellij-community)
5. [Smart Eco School - Contenido](#smart-eco-school-contenido)

### Información general
***
<p>Smart Eco School es un proyecto creado por un grupo de Alumnos del IES El Rincón el cual pretende analizar
el gasto tanto de energía como de agua del centro para que se controle el uso de dichos recursos.</p>

<p>El proyecto incluido en éste repositorio consta de una Página Web compuesta por HTML, Javascript y CSS.</p>

## Tecnologías
***
Las tecnologías de este proyecto son:
* Technology stack: IntelliJ IDEA Ultimate con Apache Tomcat 9.0.86
* Base de datos: MySQL Server

## Instalación
***
<p>El proyecto está creado con Maven.</p>

## Instalación en Intellij Community
***
* Apache Tomcat en Intellij Community
  <p>Si se instala Apache Tomcat en Intellij Community en lugar de Intellij Ultimate, hay que hacer unos pasos adicionales para que funcione Apache Tomcat.</p>

* Primer paso
  <p>Accedemos a Intellij Community y en la esquina superior izquierda hacemos clic en File, Settings, Tools, External Tools y una vez lo seleccionemos, hacemos clic en el + dentro de la ventana de External Tools.</p>

* Create tool
  - <p>En el recuadro del nombre, ponemos el nombre del Tomcat descargado, por ejemplo, "apache-tomcat-9.0.86".</p>

  - <p>En Tool Settings, en donde pone Program, indicamos la ruta en donde tenemos nuestro "Catalina.bat": "Program Files\apache-tomcat-9.0.86\bin\catalina.bat"</p>

  - <p>En Arguments, incluimos este comando: jpda run.</p>

  - <p>En Working Directory, indicamos la ruta en donde esta el "Bin" de Apache Tomcat "Program Files\apache-tomcat-9.0.86\bin"</p>

  - <p>Cuando terminemos éstos pasos, aplicamos los cambios y aceptamos.</p>

  <h1 align="center"><img src="https://github.com/JordanAlemanSantan-IESElrincon/ProyectoKiosco_Smartecoschool/assets/56256350/8fcf5280-bd96-45bd-8c49-610584cbf40e" width="350"></h1>

* Maven
  - <p>Si vamos al lateral derecho, podremos ver una Campana de Notificaciones y debajo, una M de Maven; accederemos a ésta última.</p>

  - <p>Podremos ver que nos sale una ventana que pone "Maven" y debajo, vemos archivos de nuestro proyecto.</p>

  - <p>Accedemos a "web-1.0-SNAPSHOT", Lifecycle y luego en Clean, le damos a Run Maven Build (el botón de "Play" en donde se muestran las demás herramientas de Maven).</p>

  - <p>Luego de hacer un Clean, vamos a donde pone Install y le damos de nuevo al botón de Run Maven Build.</p>

  <h1 align="center"><img src="https://github.com/JordanAlemanSantan-IESElrincon/ProyectoKiosco_Smartecoschool/assets/56256350/8279e192-4ca8-4042-bf40-ec28b3d8f155" width="400"></h1>

  - <p>Una vez hecho esos pasos, se nos creará una carpeta en nuestro proyecto llamada "Target".</p>

  <h1 align="center"><img src="https://github.com/JordanAlemanSantan-IESElrincon/ProyectoKiosco_Smartecoschool/assets/56256350/ddbd24c3-9041-4ea9-bde7-616256c2fea2" width="300"></h1>
  
* Settings, pluggins:
  - <p>Accedemos a Settings, Pluggins y descargamos Smart Tomcat como aparece en la imagen.</p>
  
  <h1 align="center"><img src="https://github.com/JordanAlemanSantan-IESElrincon/ProyectoKiosco_Smartecoschool/assets/56256350/5334b7d4-01fa-44e7-ab7c-8db9d0036281" width="600"></h1>

## Smart Eco School - Contenido
***
<p>Escribe aqui contenido</p>
