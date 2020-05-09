function carLoanPayment(a1,a2,a3) {
  let carFV= a1 *(a2* (1 + a2) ** a3)/ (((1+a2)**a3)-1)
  return carFV
  }
  
function homeLoanPayment(b1, b2, b3) {
  let homeFutureValue = b1 * (b2* (1 + b2) ** b3)/ (((1+b2)**b3)-1)
  return homeFutureValue
  }
 
let loan= "yes"
let decision= ""

while (loan.toLowerCase() == "yes"){
 let decision= prompt("Do you want a car or a home loan? Enter car or home or stop")   
   if (decision.toLowerCase() =="car"){
      let carPrincipal= Number(prompt("What is your principal? (no dollar sign or comas)"))
      let carRate= Number(prompt("What is your rate? (enter as a decimal i.e. 10% as 0.10)"))
      let carPeriod= Number(prompt("What is your period in months?"))
      let carPercent= carRate*100
      let cRate= carRate/12
      var monthlyCarPayment= carLoanPayment(carPrincipal, cRate, carPeriod)
      var carPayment= monthlyCarPayment.toFixed(2);
      alert(`A car payment for $${carPrincipal} over ${carPeriod} months at ${carPercent}% interest would have a monthy payment of $${carPayment}.`)
      
      } else if (decision.toLowerCase() == "home") {
      let homePrincipal = Number(prompt("What is your principal? (no dollar sign or commas)"))
      let homeRate = Number(prompt("What is your rate? (enter as a decimal i.e. 10% as 0.10)"))
      let homePeriod = Number(prompt("What is your period in years? (please choose from either 15 or 30 years)"))
        if (homePeriod==15 || homePeriod==30){
          let homePercent = homeRate * 100
          let hRate= homeRate/12
          let hPeriod= homePeriod*12
          var monthlyHomePayment = homeLoanPayment(homePrincipal, hRate, hPeriod)
          var homePayment = monthlyHomePayment.toFixed(2);
          alert(`A home payment for $${homePrincipal} over ${homePeriod} months at ${homePercent}% interest would have a monthy payment of $${homePayment}.`)
          } else {
            alert("You must enter 15 or 30 for the period")
            }
          
      } else 
        loan=prompt("Do you want to enter a new loan? Enter yes or no")
}


alert("The end")
