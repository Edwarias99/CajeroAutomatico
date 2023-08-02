  var cuentas = [
    { nombre: "Mali", saldo: 200, password: "mali123" },
    { nombre: "Gera", saldo: 290, password: "gera456" },
    { nombre: "Maui", saldo: 67, password: "maui789" }
  ];
  
  function mostrarMensaje(mensaje) {
    var pantalla = document.getElementById("pantalla");
    pantalla.innerHTML = mensaje;
  }
  
  function obtenerCuenta() {
    var selector = document.getElementById("Usuario").value;
    var indice = selector.selectedIndex;
    return cuentas[indice];
  }
  
  function validarPassword() {
    var password = document.getElementById("Contraseña").value;
    var cuenta = obtenerCuenta();
    if (password === cuenta.password) {
      mostrarMensaje("Password correcto. ¿Qué deseas hacer?");
      habilitarOpciones();
    } else {
      mostrarMensaje("Password incorrecto. Inténtalo de nuevo.");
      deshabilitarOpciones();
    }
  }
  
  function habilitarOpciones() {
    var opciones = document.getElementsByClassName("opcion");
    for (var i = 0; i < opciones.length; i++) {
      opciones[i].disabled = false;
    }
  }
  
  function deshabilitarOpciones() {
    var opciones = document.getElementsByClassName("opcion");
    for (var i = 0; i < opciones.length; i++) {
      opciones[i].disabled = true;
    }
  }
  
  function consultarSaldo() {
    var cuenta = obtenerCuenta();
    mostrarMensaje("Tu saldo actual es de $" + cuenta.saldo);
  }
  
  function ingresarMonto() {
    var monto = Number(prompt("¿Qué monto deseas ingresar?"));
    var cuenta = obtenerCuenta();
    if (monto > 0 && monto + cuenta.saldo <= 990) {
      cuenta.saldo += monto;
      mostrarMensaje(
        "Has ingresado $" + monto + ". Tu nuevo saldo es de $" + cuenta.saldo
      );
    } else {
      mostrarMensaje(
        "No puedes ingresar ese monto. El saldo máximo permitido es de $990."
      );
    }
  }
  
  function retirarMonto() {
    var monto = Number(prompt("¿Qué monto deseas retirar?"));
    var cuenta = obtenerCuenta();
    if (monto > 0 && monto <= cuenta.saldo && cuenta.saldo - monto >= 10) {
      cuenta.saldo -= monto;
      mostrarMensaje(
        "Has retirado $" + monto + ". Tu nuevo saldo es de $" + cuenta.saldo
      );
    } else {
      mostrarMensaje(
        "No puedes retirar ese monto. El saldo mínimo permitido es de $10."
      );
    }
  }