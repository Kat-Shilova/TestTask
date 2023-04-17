interface Sorter {
    sort: () => void;
    unsort: () => void;
    reverse: () => void;
}

class BubbleSorter implements Sorter {
    result: Array<number>;
    sort: () => void;
    unsort: () => void;
    reverse: () => void;

    constructor(arr: Array<number>) {
        this.result = [];

        this.sort = () => {

            for (let i = 0; i <= arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    const arrI = arr[i];

                    arr[i] = arr[i + 1];
                    arr[i + 1] = arrI;
                }

                this.result = arr;
            }

            // как вариант
            // this.result = arr.sort((a, b) => {
            //     return a - b;
            // });
        };

        this.unsort = () => {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));

                [arr[i], arr[j]] = [arr[j], arr[i]];

                this.result = arr;
            }
        };

        this.reverse = () => {
            arr.reverse();
        };
    }
}

const sorter = new BubbleSorter([4, 2, 16, 3, 27, 0, 9]);

sorter.sort();
sorter.result;