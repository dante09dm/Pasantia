function  formatDate (format, date) {
    var fec = date.substring(0, 10);
    var separator = '/', formatSeparator = '/';
    if(fec.indexOf("-") > -1) separator = "-";
    if(format.indexOf("-") > -1) formatSeparator = "-";

    if (!date) return null

      const [year, month, day] = fec.split(separator);
    var formated = `${day}${formatSeparator}${month}${formatSeparator}${year}`;

    if(format === 'yyyy-mm-dd' || format === 'yyyy/mm/dd'){
      formated = `${year}${formatSeparator}${month}${formatSeparator}${day}`;
    }

    return formated;
}

function serveApi(entorno){
  var url = 'http://localhost:8081';
    if(entorno === 'production')
      url = 'https://emergenciasmedicas-api.cajapsipba.org.ar'
      return url;
}

function servePDF(entorno){
    var url = "https://repdf-dev.cajapsipba.org.ar/";
    if(entorno === 'production') url =  "https://repdf.cajapsipba.org.ar/";
    return url; 
}

function abrePDF(url){
  window.open(url, '_blank');
}

function soloMontos(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      numeros = " 1234567890.,$";

    if (numeros.indexOf(tecla) == -1) {
      return false;
    }
};

function soloNumeros(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      numeros = "1234567890";

    if (numeros.indexOf(tecla) == -1) {
      return false;
    }
};
