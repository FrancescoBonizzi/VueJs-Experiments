var sortingApp = new Vue({

    el: '#app-sorting',

    data: {

        arrayToBeSorted: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
        shuffleButtonText: "Shuffle!",
        sortAlgorithms: [
            { name: "BubbleSort", fn: bubbleSort }
        ]

    },

    methods: {

        shuffle: function() {
            this.arrayToBeSorted = shuffle(this.arrayToBeSorted);
        },

        sort: function () {
        /* TODO Prendi parametro che indica quale array è sorting */
            /* Fai un array di bottoni per ogni algoritmo */
        }

    }

});
