Pinterestify
============

Plugin de jQuery que genera pins de imágenes y modal con descripción al estilo
de Pinterest.

> El objetivo de este proyecto es mostrar la creación del plugin, el diseño y
maquetación fue desarrollado por [@berenisser](https://github.com/berenisser).

Requerimientos
--------------

1. Instalar NodeJS en la máquina (una versión mayor a 4).
1. Instalar Gulp y Bower.
  ```
  npm install --global gulp-cli bower
  ```

Como instalar
-------------

1. Abrir el terminal e ir al fólder donde se encuentra el proyecto.
1. Instalar las dependencias del proyecto.
  ```
  npm install
  bower install
  ```

Como ejecutar
-------------

1. Abrir el terminal e ir al fólder donde se encuentra el proyecto.
1. Transpilar el código y levantar el servidor.
  ```
  gulp serve
  ```

Uso esperado del plugin
-----------------------

El plugin deberá cargar los pines definidos en el archivo `data.js`.
Ahí se encontrarán datos como el título, descripción, imagen, entre otros.

```javascript

/**
 *
 * @container: es el selector del contenedor donde se crearán los pines
 * @pines: es un arreglo de objetos que contiene información de las pines
 *
 **/

$(container).pinterestify({
	data: pines
});

```
