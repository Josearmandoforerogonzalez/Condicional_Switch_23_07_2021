
var foo = 10;
var output = 'Salida: ';
switch (foo) {
    case 10:
        output += '¿Y ';
    case 1:
        output += 'Cuál ';
        output += 'Es ';
    case 2:
        output += 'Tu ';
    case 3:
        output += 'Nombre';
    case 4:
        output += '?';
        console.log(output);
        break;
    
    case 5:
        output += '!';
        console.log(output);
        break;
  default:
    console.log('Por favor, selecciona un valor del 1 al 6.');
}
