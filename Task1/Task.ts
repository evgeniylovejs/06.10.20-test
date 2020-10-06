// Implement the function groupByDate below such that it groups the
// passed in items by date (only by date, NOT by date and time) into a data structure which
// provides efficent access to items by date, and returns that data structure.
// Note, the dateAndTime property is optional; any items without a dateAndTime
// should also be grouped together.

interface Item {
    id: number;
    dateAndTime?: Date;
    name: string;
}

interface GroupedItems {
    [key: string]: Item[];
    noDate: Item[];
}

function groupByDate(items: Item[]): GroupedItems {
    const initGroupedItemsVal: GroupedItems = { noDate: [] };

    let groupedItems = items.reduce((previousVal, currentVal) => {
        const date = currentVal.dateAndTime;
        if (!date) {
            previousVal.noDate.push(currentVal);
        } else {
            const dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            if (!previousVal[dateStr]) {
                previousVal[dateStr] = [];
            }
            previousVal[dateStr].push(currentVal);
        }

        return previousVal;
    }, initGroupedItemsVal);

    return groupedItems;
}

// tests
// const items: Item[] = [
//     {
//         id: 1,
//         name: "test1",
//         dateAndTime: new Date("2020-10-01"),
//     },
//     {
//         id: 2,
//         name: "test2",
//         dateAndTime: new Date("2020-10-02"),
//     },
//     {
//         id: 3,
//         name: "test3",
//         dateAndTime: new Date("2020-10-03"),
//     },
//     {
//         id: 4,
//         name: "test4",
//         dateAndTime: new Date("2020-10-01"),
//     },
//     {
//         id: 5,
//         name: "test5",
//     },
//     {
//         id: 6,
//         name: "test6",
//         dateAndTime: new Date("2020-10-01"),
//     },
//     {
//         id: 5,
//         name: "test5",
//     },
// ];
// console.log(groupByDate(items));
