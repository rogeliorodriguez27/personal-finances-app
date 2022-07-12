




//CRUD funtions


import { saveTransaction, getDataTransactions, onGetTransactions } from "./firebase.js";

const form = document.getElementById('form'),
container = document.getElementById('transactions-list'),
balanceValue = document.getElementById('balanceValue'),
incomeValue = document.getElementById('incomeValue'),
expensesValue = document.getElementById('expensesValue');






window.addEventListener('DOMContentLoaded', async () =>{
    
    const querySnapshot = await getDataTransactions();
    
onGetTransactions((querySnapshot) => {
    
    let html = '';
    let total = 0;
    let income = 0;
    let expense = 0;


    querySnapshot.forEach((doc) => {
        const transaction = doc.data();
        const value = parseFloat(transaction.value) ;
        const operador = value < 0 ? '-': '+';
        const CssId = value < 0 ? 'negative': 'positive';


        expensesValue.innerHTML = `$ ${expense}` ;

        if (value >0) {
         income += parseFloat(value)
 


        }else {
          expense += parseFloat(value)
          console.log(expense)
 
 
         };
        


        incomeValue.innerHTML = `$ ${income}`;
        expensesValue.innerHTML = `$ ${expense}`;

        total += value;
        const amountWithoutOperador = Math.abs(value)

        html += `
        <div  id='${CssId}' class="card mb-3" style="max-width: 540px; ">
 
    <div >
      <div id='itemCard' class="card-body">
        <div id='infoCard' > <h5 class="card-title">${transaction.name}</h5>
        <p class="card-text">${operador} $ ${amountWithoutOperador}</p>
        </div><div id='optionsCard' >
        <button type="button" class="btn btn-primary">✎</button>
        <button type="button" class="btn btn-danger">⌫</button>
        </div>
      </div>
    </div>
  </div>
        
        `;
    });
container.innerHTML = html;
balanceValue.innerHTML = `$ ${total}`

});
    

});



form.addEventListener('submit', (e) =>{

e.preventDefault()

const transactionName = form['transaction-name']
const transactionValue = form['transaction-value']

// Disabling form submissions if there are invalid fields
if (transactionValue.value == 0 ) {
  transactionValue.classList.add('is-invalid')
}else{



saveTransaction(transactionName.value , transactionValue.value)
form.reset()}
})
  