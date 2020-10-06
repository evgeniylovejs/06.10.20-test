// Implement the function calculateSummary below such that it returns a summary
// object that contains the sum of all the balances of the passed in items.
// Note that balance and pendingTransactions are optional. Rows where 
// balance is not provided should not contribute to the summary, and
// rows where pendingTransactions is not provided should not affect the summary's
// pendingTransactions.

interface Item {
  balance?: {
    current: number,
    pendingTransactions?: number,
    credit: number
  }
}

interface Summary { 
  current: number,
  pendingTransactions: number,
  credit: number
}

function calculateSummary(items: Item[]): Summary {

}
