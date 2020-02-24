function carLoanPayment(a1,a2,a3) {
  let carFV= a1 * (1 + a2) ** a3
  return carFV
  }
 
 let decision= prompt("Do you want to finance a car or a home? Type stop at the first prompt to end the program")
 while (decision== "car" || decision=="stop"){
 
   if (decision=="car"){
  let carPrincipal= Number(prompt("What is your principal? (no dollar sign or comas)"))
  let carRate= Number(prompt("What is your rate? (enter as a decimal i.e. 10% as 0.10)"))
  let carPeriod= Number(prompt("What is your period in months?"))
  let carPercent= carRate*100
  var monthlyCarPayment= (carLoanPayment(carPrincipal, carRate, carPeriod)/ carPeriod)
  var carPayment= monthlyCarPayment.toFixed(2);
  alert(`A car payment for $${carPrincipal} over ${carPeriod} months at ${carPercent}% interest would have a monthy payment of $${carPayment}.`)
  }

  if (decision=="stop"){
  alert("Stopping calculations...")
  break
  }
}
