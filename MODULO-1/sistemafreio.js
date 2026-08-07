temperatura = 380;
freioPrecionado = true;

const FreioEmNívelPerigoso = temperatura >=400 && freioPrecionado == true; 
console.log(FreioEmNívelPerigoso)

const TemperaturaCarro = temperatura >300 && freioPrecionado == true;
console.log(TemperaturaCarro)

const FreioIdeal = temperatura <400 && temperatura >=50;
console.log(FreioIdeal)

const LuzEmergencia = temperatura >400 || temperatura <0;
console.log(LuzEmergencia)

const FreioNaoPressionado = (!(freioPrecionado))
console.log(FreioNaoPressionado)