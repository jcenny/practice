/*
let accounts = [
  [‘ben’, add, account#, $1000],
  [‘julie’, charge, account#, $1000]
  [‘bel’, credit, account#, $200]
]

I: array of arrays with card claims needed
O: array of arrays with the current balence of requested accounts in alphabetical order
C: none
E: [] => return [], if all accounts requested are invalid => return undefinded

1. for add: check validity before saving => need to save name, current balence in account object
2. for charge: check if account exists then check validity, make charge by adding to current balence only if the addition does not exceed limit
3. for credit: check if account exists then check validity, make credit by subtracting to current balence

check validity/luhn algo
79927398713 - valid
79927398712 - invalid
starting from second most right digit, double the digit, if value is more than one digit, add the digits together,
sum all digits, find the sums modulo of 10, if modulo of 10 is 0, than valid

return balences of valid accounts requested in alphabetic order
=> need to keep track of the account names being requested but names should be unique and not contain duplicates when mutiple claims are coming from same account
=> store names in a set, can change to an array and sort after before grabing the balences with the names

Time complexity
n => number of transactions
o(n) for iterating through all transaction requests 
o(nlogn) for sorting the transactions alphabetically (assuming worst case that each transaction is a different person)
o(n) for mapping through names to get balence

2n + nlogn => nlogn

Space complexity
o(n) for valid accounts, object to easily access owners and their balences
o(n) for names of valid accounts
o(n) for sorting

o(n)
can we try to eliminate the names of valid accounts
*/

const isValid = (account) => {
  let i = account.length - 1;
  let sum = 0;
  while (i >= 0) {
    let digit = Number(account[i]);
    // even index to sum
    if (i % 2 === 0) {
      sum += digit;
    } else {
      // odd index to double
      const double = digit * 2;
      if (double > 9) {
        // split value and sum if greater than 9
        const split = double.toString().split('');
        sum += Number(split[0]) + Number(split[1])
      } else {
        sum += double;
      }
    }
    i--;
  }
  return sum % 10 === 0;
}

const cardClaims = (transactions) => {
  let validAccounts = {}; // { name: [credit, balance] }
  let names = new Set();
  for (let i = 0; i < transactions.length; i++) {
    // save names for requested balence
    const name = transactions[i][0];
    const type = transactions[i][1];
    const account = transactions[i][2];
    const value = Number(transactions[i][3].substring(1));
    if (isValid(account)) {
      if (type === 'add') {
        names.add(name);
        validAccounts[name] = [value, 0];
      } else if (validAccounts[name]) {
        let limit = validAccounts[name][0];
        let current = validAccounts[name][1];
        let newBalence;
        if (type === 'charge') {
          newBalence = current + value;
          if (newBalence <= limit) {
            validAccounts[name] = [limit, newBalence];
          }
        } else if (type === 'credit') {
          newBalence = current - value;
          validAccounts[name] = [limit, newBalence];
        }
      }
    }
  }
  
  let sortedNames = Array.from(names).sort();
  let requestedBalences = sortedNames.map((name) => {
    return [name, '$' + validAccounts[name][1].toString()];
  })
  return requestedBalences;
}

// Tests
// []
// [[ all invalid accounts = invalid account number or charge/credit is claimed before account is added ]]
// [[ valid accounts with add, charge, credit claims for one account, as well as multiple accounts]]
// [[ if charge is over credit, should ignore charge ]]

const test1 = [
  ['ben', 'add', '79927398712', '$1000'],
  ['julie', 'charge', '79927398713', '$1000'],
  ['bel', 'credit', '79927398713', '$200']
];

const test2 = [
  ['julie', 'add', '79927398713', '$1000'],
  ['ben', 'add', '79927398713', '$1000'],
  ['julie', 'charge', '79927398713', '$1000'],
  ['ben', 'credit', '79927398713', '$200'],
  ['ben', 'charge', '79927398713', '$500'],
  ['julie', 'credit', '79927398713', '$200'],
  ['ben', 'credit', '79927398713', '$400'],
]

const test3 = [
  ['helen', 'add', '79927398713', '$1000'],
  ['ben', 'add', '79927398713', '$1000'],
  ['helen', 'charge', '79927398713', '$500'],
  ['helen', 'charge', '79927398713', '$600'],
  ['ben', 'charge', '79927398713', '$800'],
  ['helen', 'credit', '79927398712', '$200']
]

console.log('should return []: ', cardClaims([]));
console.log('all invalid accounts: should return []: ', cardClaims(test1));
console.log('all valid accounts with mutiple transactions should return in alphabetical order [[ben, $-100], [julie, $800]]: ', cardClaims(test2));
console.log('if charge is over credit/balence and if account exists but the account number is invalid [[ben, $800], [helen, $500]]: ', cardClaims(test3));
