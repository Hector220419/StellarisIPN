// Verificamos que el documento haya cargado correctamente, para evitar errores de cualquier tipo
$(document).ready(function() {
    // Creamos una variable para almacenar los productos del fetch, en caso de que se necesiten posteriormente
    let productos;
    // Con la opcion de JQuery, seleccionamos los elementos en donde vamos a agregar los valores de las tarjetas
    const tarjetas =  $(".tarjetas"); 
    
    function obtenerDatos() {
        fetch('data.json')
        .then(function(response) {//response es la respuesta de la data base
            response.json().then(function (json) { //json es el objeto que se obtiene
                productos=json; //se guarda el json en la variable productos
                Array.from(json).forEach((p) => { //Toma el JSON, si es un arreglo haces el forEach. Si no lo es, mandas el error.
                    
                    /****************************  Tarjetas Primarias ******************************/
                    // Se crea un apartado para la tarjeta principal seleccionada para el hover y colocarla directamente en el contenedor de tarjetas principales 
                    // Usando el Jquery, se colocan los apartados para la tarjeta, con sus respectivos atributos y clases
                    const tarjetaPrincipal = $(`
                    <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="single-team">
                            <div class="img-area">
                                <img src="${p.img}" class="img-responsive" alt="">
                            <div class="social">
                                <ul class="list-inline">
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="img-text">
                            <h4>${p.nombre}</h4>
                            <h5>${p.seccion}</h5>
                        </div>
                    </div>
                    </div>
                    `);
                    tarjetas.append(tarjetaPrincipal);
                }); // foreach para agregar los productos al div del HTML
            });//then
        }).catch(function(err) { //si hay un error
            console.log(err); //imprime el error
        });
      }
    // Llamamos a la funcion obtenerDatos para ejecutar el fetch y mostrar los valores en las tarjetas
    obtenerDatos();
});
