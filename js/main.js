function validateForm(){
	/* Escribe tú código aquí */
	var spans=document.getElementsByTagName("span");/*esta verificando en cada vuelta*/
	
	while(spans.length>0){
		spans[0].parentElement.removeChild(spans[0]);
	}
	/*esta es la validación del nombre con mayusculas*/
	var nombre=document.getElementById("name");/*esta llamando mi id de mi html*/
	var exp=/^[A-Z]/;/*estas son mis expresiones regulares*/
	if (nombre.value == null ||exp.test (nombre.value) == false){/*esta es mi condición el value lo esta convirtirtiendo a cadena*/
		var span =document.createElement("span"); /*me esta creando un elemento*/
		span.innerHTML="Coloca nombre";/*lo que va dentro de mi span de tipo texto*/
		nombre.parentNode.appendChild(span);/*colocalo si no se cumple*/
	}
	/*esta es la validación del apellido con mayusculas*/
	var apellido=document.getElementById("lastname");
	var expUno=/^[A-Z]/;
	if (apellido.value == null || expUno.test(apellido.value) == false) {
		var span = document.createElement("span");
		span.innerHTML="Coloca apellido";
		apellido.parentNode.appendChild(span);
	}
	/*esta es la validación del email, conn espresiones regulares*/
	var correo=document.getElementById("input-email");
	var exp2=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if (correo.value == null || exp2.test(correo.value) == false) {
		var span = document.createElement("span");
		span.innerHTML="Coloca correo";
		correo.parentNode.appendChild(span);
	}
	/*esta es la validación del email, conn espresiones regulares*/
	var pass=document.getElementById("input-password");
	if (pass.value== "123456" || pass.value == "098764" || pass.length == "password" || pass.value.length<6)  {
		var span = document.createElement("span");
		span.innerHTML="Coloca cotraseña correcta";
		pass.parentNode.appendChild(span);
	}

	/*esta es la validación de la elección de bicicletas*/
	var bicicletas=document.getElementsByTagName("select")[0];
	if (bicicletas.value == "0") {
		var span = document.createElement("span");
		span.innerHTML="Coloca bicicleta";
		bicicletas.parentNode.appendChild(span);
	}

}
	/*var elNombre=document.getElementById("name").value;
	var elApellido=document.getElementById("lastname").value;
	var elPassword=document.getElementById("input-password").value;

	if (elNombre == null || elNombre.length == 0){
		var vacioNombre = document.createElement("span");
		var textError = document.createTextNode("llena este espacio");
		vacioNombre.appendChild(textError);
		document.getElementsByTagName('div')[1].appendChild(vacioNombre);
	}*/

	/*var boxes=document.getElementsByClassName("input-box");
	for (var i=0;  i<boxes.length; i++) {
			var span=document.createElement("span");
			var textError = document.createTextNode("llena este espacio");
			span.appendChild(textError);
			boxes[i].appendChild(span);
		}*/	
	/*var name = document.getElementsById("name");
	if (var name.value == null){
		var span=document.createElement("span");
		span.createTextNode("Error");
		name.parentNode.appendChild(span);
		}*/