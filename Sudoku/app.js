var sudokuApp = new Vue({
	
	el: '#app-sudoku',
	
	data: {

        sudokuMatrix: [],
        initializeGameText: "Start!",
        evaluateGameText: "Verify!",
        answerImage: "",
        isGameStarted: false,
        showAnswer: false
    },

    methods: {

        initializeGame() {

            var defaultSudokuMatrix = [
                [5, 3, 4, 6, 7, 8, 9, 1, 2],
                [6, 7, 2, 1, 9, 5, 3, 4, 8],
                [1, 9, 8, 3, 4, 2, 5, 6, 7],
                [8, 5, 9, 7, 6, 1, 4, 2, 3],
                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                [9, 6, 1, 5, 3, 7, 2, 8, 4],
                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                [3, 4, 5, 2, 8, 6, 1, 7, 9]
            ];

            // Empty two random cells per row
            for (var i = 0; i < defaultSudokuMatrix.length; ++i) {
                for (var k = 0; k < 1; ++k) {
                    var randomColumnIndex = Math.floor(Math.random() * defaultSudokuMatrix.length);
                    defaultSudokuMatrix[i][randomColumnIndex] = "";
                }
            }

            this.sudokuMatrix = defaultSudokuMatrix;
            this.initializeGameText = "Restart";
            this.isGameStarted = true;
        },

        evaluateGame() {

            var copyOfSudokuMatrix = JSON.parse(JSON.stringify(this.sudokuMatrix)); 
            var sudokuSolver = Sudoku.init(copyOfSudokuMatrix);
            if (sudokuSolver.isValid()) {

                this.answerImage = "success.gif";
                this.showAnswer = true;
                this.isGameStarted = false;

                setTimeout(() => {
                    this.showAnswer = false;
                    this.isGameStarted = true;
                }, 2000);

            }
            else {

                this.answerImage = "fail.gif";
                this.showAnswer = true;
                this.isGameStarted = false;

                setTimeout(() => {
                    this.showAnswer = false;
                    this.isGameStarted = true;
                }, 2000);

            }

        }

    }
});
