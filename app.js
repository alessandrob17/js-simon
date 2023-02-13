let numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(Math.floor(Math.random() * 100 + 1));
}

alert(numbers);

setTimeout(function() {
  let userNumbers = [];
  for (let i = 0; i < 5; i++) {
    userNumbers.push(parseInt(prompt("Inserisci il numero " + (i + 1))));
  }

  let correctNumbers = [];
  for (let i = 0; i < 5; i++) {
    if (numbers.includes(userNumbers[i])) {
      correctNumbers.push(userNumbers[i]);
    }
  }

  console.log(`Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers}`);
}, 30000);
