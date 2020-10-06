// Implement the function calculateSummary below such that it returns a summary
// object that contains the sum of all the balances of the passed in items.
// Note that balance and pendingTransactions are optional. Rows where
// balance is not provided should not contribute to the summary, and
// rows where pendingTransactions is not provided should not affect the summary's
// pendingTransactions.

interface Item {
    balance?: {
        current: number;
        pendingTransactions?: number;
        credit: number;
    };
}

interface Summary {
    current: number;
    pendingTransactions: number;
    credit: number;
}

function calculateSummary(items: Item[]): Summary {
    const initSummaryVal: Summary = {
        current: 0,
        credit: 0,
        pendingTransactions: 0,
    };

    const summary = items.reduce((previousVal, currentVal) => {
        if (currentVal.balance) {
            previousVal.current += currentVal.balance.current;
            previousVal.credit += currentVal.balance.credit;
            if (currentVal.balance.pendingTransactions) {
                previousVal.pendingTransactions +=
                    currentVal.balance.pendingTransactions;
            }
        }

        return previousVal;
    }, initSummaryVal);

    return summary;
}

// tests
// const items: Item[] = [
//     {},
//     {
//         balance: {
//             current: 2,
//             credit: 1,
//         },
//     },
//     {
//         balance: {
//             current: 1,
//             pendingTransactions: 1,
//             credit: 3,
//         },
//     },
//     {},
//     {
//         balance: {
//             current: 1,
//             credit: 1,
//         },
//     },
// ];
// console.log(calculateSummary(items));
