// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAEezAM6P4QImbu_yChyWxYsL9itXRmrJQ",
    authDomain: "solovacantes-9ae97.firebaseapp.com",
    databaseURL: "https://solovacantes-9ae97.firebaseio.com",
    projectId: "solovacantes-9ae97",
    storageBucket: "solovacantes-9ae97.appspot.com",
    messagingSenderId: "739350794367"
  };
  firebase.initializeApp(config);

  // Referente vacante collection
  var messagesRef = firebase.database().ref('vacante');

// Listen for form submit
document.getElementById('vacanteForm').addEventListener('submit',
	submitForm);

// Submit form
function submitForm(e){

	e.preventDefault();

	//Get values
	var puesto = getInputVal('puesto');
	var area = getInputVal('area');
	var descripcion = getInputVal('puesto');
	var requisito = getInputVal('requisito');
	var contacto = getInputVal('contacto');
	var ciudad = getInputVal('ciudad');
	var empresa = getInputVal('empresa');


//Save vacante
	saveVacante(puesto, area, descripcion, requisito, contacto, ciudad, empresa);

}


//function to get form values
function getInputVal(id) {
	return document.getElementById(id).value;
	
}

// Save vacantes to firebase
function saveVacante(puesto, area, descripcion, requisito, contacto, ciudad, empresa){
	var newVacanteRef = messagesRef.push();
	newVacanteRef.set({
		puesto: puesto,
		area: area,
		descripcion: descripcion,
		requisito: requisito,
		contacto: contacto,
		ciudad: ciudad,
		empresa: empresa
	})
}