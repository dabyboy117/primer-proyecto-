let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generar(){


    let numeroDigitado = parseInt (cantidad.value);

    if( numeroDigitado < 8){
        alert('la cantidad de caracteres tiene que que ser mayor a 8');
    }

    let password = '';
    for(let i=0; i < numeroDigitado; i++){
          
        let caracterAleatorio =cadenaCaracteres [Math.floor(Math.random () * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=cadenaCaracteres;



    }
   
    contrasena.value = password;
}












