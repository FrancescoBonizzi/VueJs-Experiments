var sortingApp = new Vue({

    el: '#app-sorting',

    data: {

        arrayToBeSorted: [1, 2, 3, 4, 5, 6, 7, 8],
        isManipulatingArray: false,

        shuffleButtonText: "Shuffle!",

        sortAlgorithms: [
            { name: "Bubble sort", fn: bubbleSort },
            { name: "Selection sort", fn: selectionSort },
            { name: "Insertion sort", fn: insertionSort }
        ]

    },

    methods: {

        shuffle: function () {
            this.isManipulatingArray = true;
            shuffle(this.arrayToBeSorted).then(() => this.isManipulatingArray = false);
        },

        sort: function (sortAlgorithm) {
            this.isManipulatingArray = true;
            sortAlgorithm.fn(this.arrayToBeSorted).then(() => this.isManipulatingArray = false);
        }

    }

});
