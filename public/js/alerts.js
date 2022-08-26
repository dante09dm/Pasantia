function dialogoOK(titulo, texto, icono, ancho){
  Swal.fire({
    position: 'center',
    showConfirmButton: true,
    confirmButtonText:'OK',
    confirmButtonColor:'#3892d4',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    title: titulo,
    html: texto,
    icon: icono,
    width: ancho
  });
}

function toast(titulo, texto, icono){
	Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          title: titulo,
          text: texto,
          icon: icono,
        });

};

function dialogoDeshabilitado(titulo, texto, icono, ancho){
  Swal.fire({
    position: 'center',
    showConfirmButton: true,
    confirmButtonText:'OK',
    confirmButtonColor:'#3892d4',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    title: titulo,
    html: texto,
    icon: icono,
    width: ancho
  }).then(function(value) {
      location.reload()
  });
};

function avisoFaltaNroafi(){
  Swal.fire({
    position: 'center',
    showConfirmButton: true,
    confirmButtonText:'OK',
    confirmButtonColor:'#3892d4',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    title: 'ATENCIÓN',
    html: "Este modulo requiere de un número de afiliado",
    icon: 'warning',
    width: '500'
  }).then(function(value) {
      location.reload()
  });
};