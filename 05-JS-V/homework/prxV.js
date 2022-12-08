// // function Gato (nombre) {
// //     this.nombre = nombre;
// //     this.maullar = function(){
// //         return " mi nombre es :   "    + this.nombre + " ........meow!";
// //     }
// // }

// // var sam = new Gato ("SAM");
// // var kitty = new Gato ("KITTY");

// // console.log(sam.maullar());
// // console.log(kitty.maullar());


// // function Usuario (nombre, email){
// // 	this.nombre = nombre;
// // 	this.email = email;

// // }

// // Usuario.prototype.presentar = function(){
// // 	return "mi nombre es: " + this.nombre + " y mi email es :  " + this.email;
// // }

// // var Rich = new Usuario ( "Ricardo" ,  "sheik0309.gmail.com");
// // var Nella = new Usuario ("Marianella", "brunella2702@hotmail.com");

// // console.log(Rich.presentar());
// // console.log(Nella.presentar());


// // var objeto = Object.create({})
// // console.log(objeto)

// // var obj = Object.create(Object.prototype)

// // var obj = {}

// // Object.assign(obj, {nombre : "Janeth", apellido : "Alcalde"});

// // console.log(obj.nombre)

// function Persona (nombre, apellido, ciudad) {
// 	this.nombre = nombre;
// 	this.apellido = apellido;
// 	this.ciudad = ciudad;
// }
// Persona.prototype.saludo = function(){
// 	console.log( "hola mi nombre es :  " +  this.nombre + "  me apellido :  " + this.apellido + "  soy de: " + this.ciudad );

// }

// var Nella = new Persona("Marianella", "Calderon", "Sausalito");
// var Pancha = new Persona("Panchita", "Gonzales", "italia");
// Pancha.saludo();
// Nella.saludo();



// // function Alumno (nombre, apellido, ciudad, curso){
// // 	Persona.call(this, nombre, apellido, ciudad);
// // 	this.curso = curso;
// // 	this.empresa = empresa;

// // }
// // Alumno.prototype = Object.create(Persona.prototype)
// // Alumno.prototype.constructor = Alumno

// // var fio = new Alumno("Fiorella", "Gonzales", "Breña", "Marketing", "Daddytex")


// // fio.saludo();

