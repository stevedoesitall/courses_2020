const account = {
    name: 'Steve',
    expenses: [],
    income: [],
    addExpense: function(description, cost) {
        this.expenses.push({
            description,
            cost
        });
    },
    addIncome: function(description, amount) {
        this.income.push({
            description,
            amount
        });
    },   
    getAccountSummary: function() {
        let total = 0;
        this.expenses.forEach(expense => {
            total = total - expense.cost;
        });
        this.income.forEach(check => {
            total = total + check.amount;
        });
        return total;
    }
};

account.addExpense(`Rent`, 2695);
account.addExpense(`Netflix`, 11.99);
account.addExpense(`Gym`, 102.50);

account.addIncome(`Work`, 6000);
account.addIncome(`Tutoring`, 200.99);

console.log(account.getAccountSummary());