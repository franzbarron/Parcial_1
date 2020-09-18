let nombres = [
  'Jorge',
  'Isabel',
  'Juan',
  'Pedro',
  'Karina',
  'Jose',
  'Arturo',
  'Rogelio',
  'Bertha'
];

// ************** PARTE 1 **************
function challenge1() {
  const numButtons = prompt('¿Cuántos botones necesita?');
  if (numButtons > nombres.length) alert('No puedo hacer tantos botones');
  for (let i = 0; i < numButtons; i++) {
    const newButton = document.createElement('button');
    newButton.textContent = nombres[i];
    document.querySelector('#dummy').appendChild(newButton);
  }
  console.log(numButtons);
}

// ************** PARTE 2 **************
function challenge2() {
  for (const nombre of nombres) {
    console.log(nombre.toLocaleUpperCase());
  }
}

// ************** PARTE 3 **************
function challenge3() {
  function Dog(nombre, color, raza) {
    this.nombre = nombre;
    this.color = color;
    this.raza = raza;

    this.printInfo = () => {
      console.log(
        `Nombre: ${this.nombre} , De color: ${this.color} , Raza: ${this.raza}`
      );
    };
  }

  const dog1 = new Dog('Scooby Doo', 'café', 'Gran danés');
  const dog2 = new Dog('Snoopy', 'blanco', 'Beagle');
  const dog3 = new Dog('Buddy', 'dorado', 'Golden retriever');

  console.log(dog1, dog2, dog3);

  dog1.printInfo();
  dog3.printInfo();
  dog2.printInfo();
}
