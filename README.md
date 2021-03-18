# SEREMPRE TEST FOR FRONTEND DEV
Descripción del proyecto y proceso de desarrollo.

## DESCRIPCIÓN
Este proyecto consta de una vista de producto para lo que pudiera ser una e-Commerce. El concepto es mostrar la infromación más completa y detallada incluyendo opciones a elegir entre sus posibles variantes. Mostrando como final un footer que permite ver en tiempo real el balance del costo.

## PARA INICIAR
Para el proyecto se otorgaron algunos maquetados de la vista con la información para mostrar del producto y adaptado para diferentes dispositivos. Para los cuales se crearon estilos propios y reactivos

Se considera que la vista es parte de una E-Commerce por lo que se utilizó un servicio llamado **Firebase** para evitar demoras en la entrega al construir un backend del cual no se tiene conocimiento. Pudiendo acceder a todos los requerimientos en tiempo real. Además firebase provee un espacio de hosting para testeo y muestra.

### ALOJAMIENTO
Considerando que pudiera ser una E-Commerce, se estableció una función que también pudiera permitir agregar más productos bajo un modelo creado para el mismo.
De la misma manera se creó una función que permita obtener la infromación del producto en tiempo real y basado en el producto solicitado por la ruta URL en curso.
Se consideró que para optimización de carga y control de interfaz, que el documento debía cargarse de manera automática y respondiendo a cambios posibles entre productos y rutas del sitio
Las imágenes del producto fueron cargadas en el storage propio de la base de datos para agilizar su carga y evitar que la vista o el proyecto llegue a pesar de más.

### CARRUSEL DE IMÁGENES
El diseño solicita un carrusel de imágenes del producto para lo cual se creó una estrategia iterativa de los elementos considerando que un producto pueda llegar a tener diferentes cantidades de imágenes. Para SEO se establecieron los nombres de los archivos como etiqueta "alt"

### INFORMACIÓN DEL PRODUCTO
La información se condensó en un componente que permita su diseño exclusivo. Al producto se le estableció una etiqueta `isNew` la que permite mostrar al cliente la reseña de *HOT RELEASE*

### TABS DE INFORMACIÓN
Ya que no se contaba con toda la información contenida en los tabs se recurrió a usar texto genérico para las sección que no lo mostraban.

### ICONOGRAFÍA
Se creó una librería SVG de los íconos propios de la vista para mejor control y vista estética de ellos y considerando que puedan ser mostrados para otros productos

### OPCIONES O VARIANTES
Algunas características del producto mostradas en la vista se consideraron como atributos elegibles que pudieran alterar el costo del producto. 
Para ello se creó un servicio que permita en tiempo real, conocer el balance del precio con los adicionales seleccionados.

### FOOTER
Para la solicitud del footer de ser fijo, en la vista se generó una animación y funcionalidad que permita no ser invasivo, como mostrarse en scroll y elegir quitarlo en la vista intermedia

### DETALLES EXTRAS
Se consideró que tal vez los costos de envío pudieran ser opcionales. Por ello, se estableción como un atributo más que puede ser considerado al crear el producto y la vista mantendrá un balance que lo incluya

Los detalles mostrados en el footer como la garantía se pensaba diseñar para ser elegible o editable, pero se necesitaría confirmación.
