// Initialize Firebase
  var config = {

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