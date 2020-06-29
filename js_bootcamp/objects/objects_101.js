let myAccount = {
    name: 'Steve',
    expenses: 0,
    income: 0
};

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount;
};

let addIncome = function(account, amount) {
    account.income = account.income + amount;
};

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
};

let getAccountSummary = function() {
    console.log(myAccount);
};

addExpense(myAccount, 1000);
addIncome(myAccount, 5000);
resetAccount(myAccount);
getAccountSummary();