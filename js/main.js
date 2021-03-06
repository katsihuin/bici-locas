function validateForm()
{
	/* validar los campos requeridos */
	if (!validateName() || !validateLastName() || !validateEmail() || !validatePassword() || !validateTipoBici())
	{
		jsShow("commentPrompt");
		producePrompt("Formulario debe estar validado para poder registrarte", "commentPrompt", "red");
		setTimeout(function(){jsHide("commentPrompt");}, 2000);
	}	
	else
	{
		jsShow("commentPrompt");
		producePrompt("Formulario Validado Exitósamente", "commentPrompt", "green");
	}
}

/* Muestra mensaje validación*/
function jsShow(id)
{
	document.getElementById(id).style.display="block";
}

/* Oculta mensaje validación*/
function jsHide(id)
{
	document.getElementById(id).style.display="none";
}

/* Envia Mensaje al usuario*/
function producePrompt(message, promptLocation, color)
{
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
}

/* Valida Nombre*/
function validateName()
{
	var name =  document.getElementById("commentName").value;

	if (name.length == 0)
	{
		producePrompt("Tu Nombre es requerido", "commentNamePrompt", "red");
		return false;
	}
	else if (!name.match(/^[A-Z][a-z]*[a-zA-Z]$/)) 
	{
		producePrompt("Compruebe que la primera letra de su Nombres sea mayúsculas y contenga SOLO caracteres de la A-Z", "commentNamePrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Bienvenido(a) " + name, "commentNamePrompt", "green");
		return true;
	}	
}

/* Valida Apellido*/
function validateLastName()
{
	var lastName = document.getElementById("commentLastName").value;
	if (lastName.length == 0)
	{
		producePrompt("Tu Apellido es requerido", "commentLastNamePrompt", "red");
		return false;
	}
	else if (!lastName.match(/^[A-Z][a-z]*[a-zA-Z]$/)) 
	{
		producePrompt("Compruebe que la primera letra de su Apellido(s) sea mayúscula y contenga SOLO caracteres de la A-Z", "commentLastNamePrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Apellido Válido ✔", "commentLastNamePrompt", "green");
		return true;
	}	
}

/* Valida Email*/
function validateEmail()
{
	var email = document.getElementById("commentEmail").value;
	if (email.length == 0)
	{
		producePrompt("Correo Electrónico es requerido", "commentEmailPrompt", "red");
		return false;
	}
	else if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) 
	{
		producePrompt("Compruebe que el Correo Electrónico contenga un formato válido. Ej: name@domain.com", "commentEmailPrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Correo Electrónico Válido ✔", "commentEmailPrompt", "green");
		return true;
	}
}

function validatePassword()
{
	var password = document.getElementById("commentPassword").value;
	if (password.length == 0)
	{
		producePrompt("Contraseña es requerida", "commentPasswordPrompt", "red");
		return false;
	}
	else if (!password.match(/.{6,}/)) 
	{
		producePrompt("Compruebe que la contraseña tenga al menos 6 caracteres", "commentPasswordPrompt", "red");
		return false;
	}
	else if (password == "password" || password == "PASSWORD" || password == "123456" || password == "098754") 
	{
		producePrompt("La contraseña no puede ser igual a 'password' ó '123456' ó '098754'", "commentPasswordPrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Contraseña Válida ✔", "commentPasswordPrompt", "green");
		return true;
	}
}

function validateTipoBici()
{
	var tipo = document.getElementById("commentTipo").value;
	if (tipo == 0)
	{
		producePrompt("Seleccione un tipo de bici de las opciones presentadas", "commentTipoPrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Bici seleccionada ✔", "commentTipoPrompt", "green");
		return true;
	}
}

/* Valida formato de nombre de ususario en Twitter*/
function validateTwitter()
{
	var twitter = document.getElementById("commentTwitter").value;
	if (twitter.length == 0) 
	{
		jsShow("commentTwitterPrompt");
		producePrompt("Este campo es opcional", "commentTwitterPrompt", "blue");
		setTimeout(function(){jsHide("commentTwitterPrompt");}, 2000);
	}
	else if (!twitter.match(/^(\w){1,15}$/)) 
	{
		jsShow("commentTwitterPrompt");
		producePrompt("Compruebe que el Nombre de Usuario en Twitter no contenga más de 15 caracteres, símbolos, guiones o espacios", "commentTwitterPrompt", "red");
		setTimeout(function(){jsHide("commentTwitterPrompt");}, 2000);
	}
	else 
	{
		producePrompt("Nombre de Usuario en Twitter Válido ✔", "commentTwitterPrompt", "green");
		return true;
	}
}

/* Valida Informacion */
function validateInfo()
{
	var info = document.getElementById("commentInfo").value;
	if (info.checked==true) 
	{
		producePrompt("¡Gracias! Estaremos en contacto contigo muy pronto.", "commentInfoPrompt", "blue");
		return true;
	}
}