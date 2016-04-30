// scrip que permitira mostrar peliculas
// creamos un arreglo de obejtos peliculas

var peliculas=[
	{Nombre: "Touch", director:"Paul Schrader ",Genero:"Accion",signopsis:"Juvenal, un misionero de la selva brasileña, abandona la Orden de los franciscanos y se traslada a Los Angeles para trabajar en una residencia de desintoxicación de drogadictos. Cuando se descubre que tiene un extraño don para sanar a los enfermos, gentes de la más variada condición intentarán entrometerse en su vida."},
	{Nombre: "El caballero Oscuro", director:"Christopher Nolan ",Genero:"Accion",signopsis:"Han pasado ocho años desde que Batman desapareciera en la oscuridad, convirtiéndose, en ese instante, de héroe en fugitivo. Al asumir la culpa por la muerte de D.A. Harvey Dent, el Caballero Oscuro lo sacrificó todo por lo que considera, al igual que el Comisario Gordon, un bien mayor. La mentira funciona durante un tiempo, ya que la actividad criminal de la ciudad de Gotham se ve aplacada gracias a la dura Ley Dent. "},
	{Nombre: "Piratas del caribe",director:"Rob Marshall",Genero:"Comedia",signopsis:"Producida por Jerry Bruckheimer y dirigida por Rob Marshall, “Piratas del Caribe: En Mareas Misteriosas” vuelve a ofrecer las enormes dosis de diversión, aventura y humor que deslumbraron en las anteriores entregas de esta saga de éxito. Pero esta vez será en formato Disney Digital 3D™. Johnny Depp regresa a su ya legendario papel del Capitán Jack Sparrow en un cuento repleto de acción sobre la verdad, la traición, la juventud y la desaparición. Cuando Jack se cruza con una mujer de su pasado (Penélope Cruz), no está muy seguro de si se trata de amor o si ella es una estafadora sin escrúpulos que le está utilizando para encontrar la legendaria Fuente de la Juventud. Jack es capturado por el Queen Anne’s Revenge, el barco del temible pirata Barbanegra (Ian McShane)."},
	{Nombre: "Crepusculo amanecer 2", director:"Bill Condon ",Genero:"Drama",signopsis:"Tras convertirse en vampiro, Bella debe adaptarse a su nueva naturaleza. Cuando nace Renesmee, la familia Cullen tendrá que protegerse de la amenaza de los Volturi, pues existe una ley que prohíbe transformar a los niños en vampiros, ya que son difíciles de controlar y pueden provocar desastres que pongan en peligro la secreta existencia de los vampiros."},
	{Nombre: "los vengadores", director:"Joss Whedon  ",Genero:"Accion",signopsis:"Marvel Studios presenta “Marvel Los Vengadores”, el equipo de super héroes más espectacular de todos los tiempos con iconos como Iron Man, El Increíble Hulk, Thor, Capitán América, Ojo de Halcón y Viuda Negra. Cuando un enemigo inesperado amenaza con poner en peligro la seguridad mundial, Nick Fury, Director de la agencia internacional para el mantenimiento de la paz, conocida con el nombre de SHIELD, necesita encontrar urgentemente un equipo que salve al mundo del mayor de los desastres. Así empieza una búsqueda por todo el mundo para reclutar personal."},
	
	];

function printHTML(mensaje)
{

html+="<h3>Peliculas</h3>";
var infoDiv=document.getElementById("info-peliculas");
}
function printList(lista,ubicacion)
{
	var listHTML='';
	if(ubicacion<0){
		for(var i=0; i<lista.length; i++){
		listHTML +=  crearLista (lista , i);
	}
	else
	{
		listHTML += crearLista (lista , ubicacion);
	}
	printHtml(listHTML ,'info-peliculas');

//funcion que permite crear la lista de peliculas
function crearLista(lista,ubicacion)
{
	listHTML='';
	listHTML += '<ul>';
	listHTML += '<li> Nombre: ' + lista[ubicacion].Nombre + '</li>'; 
	listHTML += '<li> director: ' + lista[ubicacion].director + '</li>';
	listHTML += '<li> Genero: ' + lista[ubicacion].Genero + '</li>';
	listHTML += '<li> signopsis: ' + lista[ubicacion].signopsis + '</li>';
	listHTML += '</ul>'
	return listHTML;
	printList(peliculas,ubicacion);
}


function printHtml(mensaje)
{
	//remplazando por getelementaryID para tomar el nodo(object)
	var outputDiv =document.getElementById('output');
  	outputDiv.innerHTML = mensaje;


}
//arreglo de locales
var locales=[
	{ciudad: "La Libertad",salas:8,direccion:"avenidad 29 de octubre"};
	{ciudad: "Santa ELENA",salas:5,direccion:"CALLE SUCRE"};
	{ciudad: "sALINAS",salas:5,direccion:"MALECON"};
	
	
	];

function printHTML(mensaje)
{

html+="<h3>LOCALES</h3>";
var infoDiv=document.getElementById("info-locales");
}
function printList(lista,ubicacion)
{
	var listHTML='';
	if(ubicacion<0){
		for(var i=0; i<lista.length; i++){
		listHTML +=  crearLista (lista , i);
	}
	else
	{
		listHTML += crearLista (lista , ubicacion);
	}
	printHtml(listHTML ,'info-locales');

//funcion que permite crear la lista de peliculas
function crearLista(lista,ubicacion)
{
	listHTML='';
	listHTML += '<ul>';
	listHTML += '<li> ciudad: ' + lista[ubicacion].ciudad + '</li>'; 
	listHTML += '<li> salas: ' + lista[ubicacion].salas + '</li>';
	listHTML += '<li> direccion: ' + lista[ubicacion].direccion + '</li>';
	
	listHTML += '</ul>'
	return listHTML;
	printList(peliculas,ubicacion);
}


function printHtml(mensaje)
{
	//remplazando por getelementaryID para tomar el nodo(object)
	var outputDiv =document.getElementById('output');
  	outputDiv.innerHTML = mensaje;


}
/*
function buscaEstudiante(lista.Nombre){
	var encontrado ='-1';
	for(var i=0;i<lista.length; i++)
	{
       encontrado=i;
	}
}
return encontrado;

























/*
function buscaEstudiante(lista.Nombre){
	var encontrado ='-1';
	for(var i=0;i<lista.length; i++)
	{
       encontrado=i;
	}
}
return encontrado;

/*BUSQUEDA DE ESTUDIOANTE EN REGISTRO*/

/*while(true){
	var busqueda = prompt("Ingrese una opcion: ** q= Salir ** l= listar ** Ingrese el estudiante  a consultar: ");
	if(busqueda != "" && busqueda = null);
	if (busqueda.toLowerCase()=='q'){
		alert("Has finalizado la busqueda");
		break;
	}
	else if(busqueda.toLowerCase()=='l'){
	
			printList(estudiante , -1);	
	}
	else{
		var ubicacion=buscaEstudiante(estudiante,busqueda.toLowerCase());
		if(ubicacion>=0){
			printList(estudiante,ubicacion);
		}
		else
		{
			alert ("El Estudiante no existe en el registro");
		}
	}
	else
	{
		alert ("El dato no es correcto, ingrese de nuevo el nombre");
	}
*/