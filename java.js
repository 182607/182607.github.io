function generarRFC() {
  var nombre = document.getElementById('nombre').value.toUpperCase();
  var apellidoPaterno = document.getElementById('apellidoPaterno').value.toUpperCase();
  var apellidoMaterno = document.getElementById('apellidoMaterno').value.toUpperCase();
  var fechaNacimiento = document.getElementById('fechaNacimiento').value;

  var partesFecha = fechaNacimiento.split('-');
  var año = partesFecha[0].substring(2);
  var mes = partesFecha[1];
  var dia = partesFecha[2];

  var rfc = apellidoPaterno.substring(0, 2) + apellidoMaterno.charAt(0) + nombre.charAt(0) + año + mes + dia;

  document.getElementById('rfcResultado').value = rfc;
}
