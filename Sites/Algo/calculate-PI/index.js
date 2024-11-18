function gregoryLiebnizSeries(nb) {
  let total = 0;
  let final = 0;

    for (let n = 0 ; n < nb ; n++) {
      let numerator = Math.pow(-1, n);
      let denominator = ((2 * n) + 1);
  
      total += (numerator / denominator);
    }
    final = 4 * total;
  
    console.log("Value of PI we calculated is: " + final);
    console.log("Value of Math.PI is: " + Math.PI);
    console.log("Difference is: " + Math.abs(final - Math.PI));

    let result = document.querySelector('#result1');
    //console.log(result);
    result.innerHTML = `Value of PI we calculated is: ${final} <br/>
    Value of Math.PI is: ${Math.PI} <br/>
    Difference is: ${Math.abs(final - Math.PI)} <br/>`;
  }

function baileyBorweinPlouffe(nb) {
  let final = 0;

    for (let n = 0; n < nb; n++) {
      let scale = (1 / Math.pow(16, n));
      let inner = (4 / (8 * n + 1)) - (2 / (8 * n + 4)) - (1 / (8 * n + 5)) - (1 / (8 * n + 6));
  
      let iteration = scale * inner;
      final += iteration;
    }
    
    console.log("Value of PI we calculated is: " + final);
    console.log("Value of Math.PI is: " + Math.PI);
    console.log("Difference is: " + Math.abs(final - Math.PI));

    let result = document.querySelector('#result2');
    //console.log(result);
    result.innerHTML = `Value of PI we calculated is: ${final} <br/>
    Value of Math.PI is: ${Math.PI} <br/>
    Difference is: ${Math.abs(final - Math.PI)} <br/>`;

}