/* Le debo indicar a JS que va a trabajar la 
organización de las imágenes con la librería de 
MUURI. Para conectarme con esta librería, debo 
llamar la clase previamente creada en los estilos, 
en este caso "grid"  */

/* De igual manera, el establecimiento de los 
valores de las variables y argumentos están indicados 
en la web de Muuri. Es necesario consultar la documentación
para poder manipular los elementos de la librería*/
const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});